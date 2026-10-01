"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type SelectHTMLAttributes,
  type ReactElement,
} from "react";
import { createPortal } from "react-dom";
import { RegistrationIcon } from "./registration-icon";

function menuPosition(rect: DOMRect) {
  const below = window.innerHeight - rect.bottom - 12;
  const above = rect.top - 12;
  const up = below < 180 && above > below;
  const height = Math.min(280, up ? above : below);
  return {
    left: Math.max(8, Math.min(rect.left, window.innerWidth - rect.width - 8)),
    top: up ? rect.top - 8 : rect.bottom + 8,
    width: rect.width,
    maxHeight: height,
    transform: up ? "translateY(-100%)" : "",
  };
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & { choices?: boolean };
export function RegistrationSelect({
  children,
  choices,
  className,
  onChange,
  ...props
}: Props) {
  const options = Children.toArray(children)
    .filter(isValidElement)
    .map((child) => {
      const option = child as ReactElement<{
        value: string;
        children: string;
        disabled?: boolean;
      }>;
      return {
        value: String(option.props.value),
        label: String(option.props.children),
        disabled: option.props.disabled,
      };
    });
  const [internal, setInternal] = useState(String(props.defaultValue ?? ""));
  const selected = String(props.value ?? internal);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    maxHeight: 240,
    transform: "",
  });
  const native = useRef<HTMLSelectElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const search = useRef({ text: "", time: 0 });
  const enabled = options
    .map((o, i) => (o.disabled ? -1 : i))
    .filter((i) => i >= 0);
  const listId = `${props.id}-options`;
  function choose(index: number) {
    const option = options[index];
    if (!option || option.disabled || !native.current) return;
    native.current.value = option.value;
    native.current.dispatchEvent(new Event("change", { bubbles: true }));
    setOpen(false);
    if (!choices) trigger.current?.focus({ preventScroll: true });
  }
  function show() {
    const rect = trigger.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(menuPosition(rect));
    setOpen(true);
    const index = options.findIndex((o) => o.value === selected && !o.disabled);
    setActive(index >= 0 ? index : (enabled[0] ?? 0));
  }
  useEffect(() => {
    if (!open) return;
    const close = (event: Event) => {
      const target = event.target as Node;
      if (!menu.current?.contains(target) && !trigger.current?.contains(target))
        setOpen(false);
    };
    const reposition = (event: Event) => {
      if (menu.current?.contains(event.target as Node)) return;
      const rect = trigger.current?.getBoundingClientRect();
      if (!rect || rect.bottom < 0 || rect.top > window.innerHeight)
        setOpen(false);
      else setPosition(menuPosition(rect));
    };
    document.addEventListener("pointerdown", close);
    window.addEventListener("resize", reposition);
    // Follow page movement without closing during focus or smooth scrolling.
    window.addEventListener("scroll", reposition, true);
    return () => {
      document.removeEventListener("pointerdown", close);
      window.removeEventListener("resize", reposition);
      window.removeEventListener("scroll", reposition, true);
    };
  }, [open]);
  useEffect(() => {
    if (!open || !menu.current) return;
    const option = document.getElementById(`${listId}-${active}`);
    if (!option) return;
    const list = menu.current;
    if (option.offsetTop < list.scrollTop) list.scrollTop = option.offsetTop;
    else if (
      option.offsetTop + option.offsetHeight >
      list.scrollTop + list.clientHeight
    )
      list.scrollTop =
        option.offsetTop + option.offsetHeight - list.clientHeight;
  }, [active, open, listId]);
  function key(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Tab") {
      setOpen(false);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      return;
    }
    if (
      ["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(event.key)
    ) {
      event.preventDefault();
      if (!open) {
        show();
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        choose(active);
        return;
      }
      const current = enabled.indexOf(active);
      setActive(
        event.key === "Home"
          ? enabled[0]
          : event.key === "End"
            ? enabled.at(-1)!
            : enabled[
                Math.max(
                  0,
                  Math.min(
                    enabled.length - 1,
                    current + (event.key === "ArrowDown" ? 1 : -1),
                  ),
                )
              ],
      );
    } else if (
      event.key.length === 1 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      if (!open) show();
      const now = event.timeStamp;
      search.current = {
        text:
          now - search.current.time < 700
            ? search.current.text + event.key
            : event.key,
        time: now,
      };
      const match = options.findIndex(
        (o) =>
          !o.disabled &&
          o.label.toLowerCase().startsWith(search.current.text.toLowerCase()),
      );
      if (match >= 0) setActive(match);
    }
  }
  return (
    <>
      <select
        {...props}
        id={`${props.id}-value`}
        defaultValue={undefined}
        value={selected}
        hidden
        aria-hidden="true"
        tabIndex={-1}
        ref={native}
        onChange={(event) => {
          setInternal(event.target.value);
          onChange?.(event);
        }}
      >
        {children}
      </select>
      {choices ? (
        <div
          id={props.id}
          tabIndex={-1}
          role="radiogroup"
          aria-required={props["aria-required"]}
          aria-labelledby={`${props.id}-label`}
          aria-describedby={props["aria-describedby"]}
          aria-invalid={props["aria-invalid"]}
          className="flex flex-wrap gap-2 rounded-md outline-none aria-invalid:ring-2 aria-invalid:ring-error/30 focus-visible:ring-3 focus-visible:ring-brand-teal/15"
        >
          {options
            .filter((o) => o.value && !o.disabled)
            .map((option, index) => (
              <label
                key={option.value}
                className={`flex min-h-12 cursor-pointer items-center gap-2 rounded-md border px-3 text-sm transition-colors focus-within:ring-3 focus-within:ring-brand-teal/15 ${selected === option.value ? "border-brand-teal bg-brand-teal-soft/50 text-brand-teal-deep" : "border-border-soft bg-white hover:border-brand-teal"}`}
              >
                <input
                  type="radio"
                  id={`${props.id}-${index}`}
                  name={`${props.name}-choice`}
                  value={option.value}
                  checked={selected === option.value}
                  onChange={() =>
                    choose(options.findIndex((o) => o.value === option.value))
                  }
                  disabled={props.disabled}
                  className="size-4 accent-brand-teal"
                />
                {option.label}
              </label>
            ))}
        </div>
      ) : (
        <button
          type="button"
          ref={trigger}
          id={props.id}
          role="combobox"
          aria-labelledby={`${props.id}-label`}
          aria-required={props["aria-required"]}
          aria-invalid={props["aria-invalid"]}
          aria-describedby={props["aria-describedby"]}
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-activedescendant={open ? `${listId}-${active}` : undefined}
          aria-haspopup="listbox"
          disabled={props.disabled}
          onClick={() => (open ? setOpen(false) : show())}
          onKeyDown={key}
          className={`${className} flex items-center justify-between gap-3 text-left disabled:cursor-not-allowed disabled:opacity-60`}
        >
          <span className={selected ? "" : "text-muted-foreground"}>
            {options.find((o) => o.value === selected)?.label}
          </span>
          <RegistrationIcon
            name="chevron"
            className={`shrink-0 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}
      {open &&
        !choices &&
        createPortal(
          <div
            ref={menu}
            id={listId}
            role="listbox"
            aria-labelledby={`${props.id}-label`}
            style={position}
            className="fixed z-[100] overflow-y-auto overscroll-contain rounded-lg border border-border-soft bg-white p-1.5 shadow-xl"
          >
            {options.map((option, index) => (
              <div
                key={option.value}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={selected === option.value}
                aria-disabled={option.disabled || undefined}
                onPointerMove={() => !option.disabled && setActive(index)}
                onPointerDown={(event) => {
                  if (event.pointerType === "mouse") event.preventDefault();
                }}
                onClick={() => choose(index)}
                className={`flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-sm leading-5 ${option.disabled ? "text-muted-foreground/60" : `cursor-pointer ${index === active ? "bg-[color-mix(in_srgb,var(--background)_94%,var(--foreground))] text-brand-teal-deep" : "text-foreground"}`}`}
              >
                {option.label}
                {option.value && selected === option.value && (
                  <RegistrationIcon
                    name="check"
                    className="shrink-0 text-brand-teal"
                  />
                )}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
