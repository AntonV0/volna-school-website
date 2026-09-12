"use client";


import Image from "next/image";
import Link from "next/link";
import {
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { courseThemeClasses } from "@/components/course/course-theme";
import { cn } from "@/lib/classnames";
import type { HomeCourseRouteKey } from "@/components/home/home-shared";

type Testimonial = {
  courseLabel: string;
  name: string;
  quote: string;
  role: string;
  routeKey: HomeCourseRouteKey;
};

type EnglishTestimonialCarouselProps = {
  testimonials: Testimonial[];
  title: string;
};

type CarouselDirection = "backward" | "forward";

type CarouselTransition = {
  direction: CarouselDirection;
  from: number;
  mode: "desktop" | "mobile";
  phase: "animating" | "positioning";
  to: number;
};

type CarouselTransitionRequest = Omit<CarouselTransition, "phase">;

type SwipeGesture = {
  dragging: boolean;
  mode: "desktop" | "mobile";
  pointerId: number;
  startX: number;
  startY: number;
  width: number;
};

const carouselTransitionDuration = {
  desktop: 430,
  mobile: 380,
} as const;
const carouselTransitionEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const googleReviewsHref = "https://maps.app.goo.gl/JsWDb9Sg8j1s5z756";
const trustpilotReviewsHref =
  "https://uk.trustpilot.com/review/volnaschool.com";

const courseLabelClasses: Record<HomeCourseRouteKey, string> = {
  children:
    "border-route-children/25 bg-route-children-soft text-route-children",
  gcse: "border-route-exam/25 bg-route-exam-soft text-route-exam",
  alevel:
    "border-route-advanced/25 bg-route-advanced-soft text-route-advanced",
  adults: "border-route-adult/25 bg-route-adult-soft text-route-adult",
};

const courseBarClasses: Record<HomeCourseRouteKey, string> = {
  children: "bg-route-children",
  gcse: "bg-route-exam",
  alevel: "bg-route-advanced",
  adults: "bg-route-adult",
};

const courseInitialClasses: Record<HomeCourseRouteKey, string> = {
  children: "bg-route-children-soft text-route-children",
  gcse: "bg-route-exam-soft text-route-exam",
  alevel: "bg-route-advanced-soft text-route-advanced",
  adults: "bg-route-adult-soft text-route-adult",
};

const courseQuoteClasses: Record<HomeCourseRouteKey, string> = {
  children: "text-route-children/[0.08]",
  gcse: "text-route-exam/[0.08]",
  alevel: "text-route-advanced/[0.08]",
  adults: "text-route-adult/[0.08]",
};

const courseDividerClasses: Record<HomeCourseRouteKey, string> = {
  children: "border-route-children/15",
  gcse: "border-route-exam/15",
  alevel: "border-route-advanced/15",
  adults: "border-route-adult/15",
};

const courseHrefs: Record<HomeCourseRouteKey, string> = {
  children: "/classes-for-children",
  gcse: "/gcse-courses",
  alevel: "/a-level-courses",
  adults: "/courses-for-adults",
};

const testimonialPageLabels: Record<HomeCourseRouteKey, string> = {
  children: "Classes for children",
  gcse: "GCSE Courses",
  alevel: "A Level Courses",
  adults: "Courses for Adults",
};

function getQuoteSizeClasses(quote: string) {
  if (quote.length < 205) {
    return "text-xl leading-[1.55] sm:text-[1.45rem] sm:leading-[1.58] md:text-xl md:leading-[1.5] lg:text-[1.45rem] lg:leading-[1.58]";
  }

  if (quote.length <= 238) {
    return "text-[1.1875rem] leading-[1.55] sm:text-xl md:text-lg md:leading-[1.6] lg:text-xl lg:leading-[1.55]";
  }

  if (quote.length <= 250) {
    return "text-lg leading-[1.55] sm:text-xl md:text-[1.0625rem] md:leading-[1.5] lg:text-xl lg:leading-[1.55]";
  }

  if (quote.length <= 280) {
    return "text-[1.09375rem] leading-[1.55] sm:text-[1.1875rem] md:text-[1.0625rem] md:leading-[1.5] lg:text-xl lg:leading-[1.55]";
  }

  return "text-[1.0625rem] leading-[1.55] sm:text-lg md:text-base md:leading-[1.5] lg:text-lg lg:leading-[1.55]";
}

function getRovingSelectorIndex(
  key: string,
  currentIndex: number,
  total: number,
) {
  if (key === "ArrowLeft") {
    return (currentIndex - 1 + total) % total;
  }

  if (key === "ArrowRight") {
    return (currentIndex + 1) % total;
  }

  if (key === "Home") {
    return 0;
  }

  if (key === "End") {
    return total - 1;
  }

  return null;
}

function getCarouselPageStyle(
  index: number,
  transition: CarouselTransition | null,
) {
  if (!transition || (index !== transition.from && index !== transition.to)) {
    return undefined;
  }

  const pageGutter = transition.mode === "desktop" ? "3.5rem" : "2rem";
  const forwardOffset = `calc(100% + ${pageGutter})`;
  const backwardOffset = `calc(-100% - ${pageGutter})`;
  const offset =
    transition.direction === "forward" ? forwardOffset : backwardOffset;
  let transform = "translateX(0)";

  if (transition.phase === "positioning" && index === transition.to) {
    transform = `translateX(${offset})`;
  }

  if (transition.phase === "animating" && index === transition.from) {
    transform =
      transition.direction === "forward"
        ? `translateX(${backwardOffset})`
        : `translateX(${forwardOffset})`;
  }

  return {
    transform,
    transition:
      transition.phase === "animating"
        ? `transform ${carouselTransitionDuration[transition.mode]}ms ${carouselTransitionEasing}`
        : "none",
    willChange: "transform",
  };
}

function TestimonialCard({
  index,
  testimonial,
  total,
  secondary = false,
}: {
  index: number;
  testimonial: Testimonial;
  total: number;
  secondary?: boolean;
}) {
  return (
    <article
      aria-label={`Testimonial ${index + 1} of ${total}`}
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white p-6 text-foreground shadow-[0_28px_70px_rgba(2,30,42,0.22)] max-[359px]:p-4 sm:p-8 md:p-6 lg:p-8",
        secondary &&
          cn(
            "lg:translate-y-6",
            courseThemeClasses[testimonial.routeKey].testimonialBg,
          ),
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-1.5",
          courseBarClasses[testimonial.routeKey],
        )}
      />

      <div className="flex items-start">
        <Link
          aria-label={`View ${testimonial.courseLabel}`}
          className={cn(
            "inline-flex whitespace-normal rounded-full border px-2.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.09em] transition duration-200 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal max-[359px]:px-2 max-[359px]:tracking-[0.05em]",
            courseLabelClasses[testimonial.routeKey],
          )}
          href={courseHrefs[testimonial.routeKey]}
        >
          <span>{testimonial.courseLabel}</span>
        </Link>
      </div>

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-4 top-12 font-serif text-[8rem] leading-none sm:left-6 sm:top-14",
          courseQuoteClasses[testimonial.routeKey],
        )}
      >
        &ldquo;
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-8 right-4 font-serif text-[7rem] leading-none sm:right-6",
          courseQuoteClasses[testimonial.routeKey],
        )}
      >
        &rdquo;
      </span>

      <blockquote
        className={cn(
          "relative mt-8 font-medium tracking-[-0.015em] text-foreground",
          getQuoteSizeClasses(testimonial.quote),
        )}
      >
        {testimonial.quote}
      </blockquote>

      <footer
        className={cn(
          "relative z-10 mt-auto flex items-center gap-3 border-t pt-5",
          courseDividerClasses[testimonial.routeKey],
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold",
            courseInitialClasses[testimonial.routeKey],
          )}
        >
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="font-semibold text-brand-teal-deep">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
      </footer>
    </article>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-5", direction === "left" && "rotate-180")}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M7 4.25H5.25a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5V9M8.5 3.75h3.75V7.5M7.5 8.5l4.5-4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ReviewPlatformLinks() {
  const linkClasses =
    "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.12] px-3.5 text-[0.8rem] font-semibold leading-none text-white shadow-[0_6px_14px_rgba(0,0,0,0.07)] transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.2] hover:shadow-[0_8px_18px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div className="flex w-full flex-col items-start gap-2 border-t border-white/15 pt-4 xl:w-auto xl:shrink-0 xl:items-end xl:border-t-0 xl:pt-0">
      <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] text-white/65">
        Read more reviews
      </p>
      <div className="flex items-center gap-2 max-[374px]:w-full max-[374px]:flex-col max-[374px]:items-stretch">
        <a
          aria-label="Read Volna School reviews on Google (opens in a new tab)"
          className={linkClasses}
          href={googleReviewsHref}
          rel="noreferrer"
          target="_blank"
        >
          <span className="relative size-[1.125rem] overflow-hidden rounded-full bg-white">
            <Image
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
              height={42}
              src="/brand/google-g.png"
              width={42}
            />
          </span>
          <span className="translate-y-px">Google</span>
          <ExternalLinkIcon />
        </a>
        <a
          aria-label="Read Volna School reviews on Trustpilot (opens in a new tab)"
          className={linkClasses}
          href={trustpilotReviewsHref}
          rel="noreferrer"
          target="_blank"
        >
          <span className="relative size-[1.125rem] overflow-hidden">
            <Image
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-1/2 h-[1.125rem] w-auto max-w-none -translate-y-1/2"
              height={74}
              src="/brand/trustpilot-logo-white.svg"
              width={300}
            />
          </span>
          <span className="translate-y-px">Trustpilot</span>
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}

export function EnglishTestimonialCarousel({
  testimonials,
  title,
}: EnglishTestimonialCarouselProps) {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [activeTransition, setActiveTransition] =
    useState<CarouselTransition | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionFrame = useRef<number | null>(null);
  const swipeGesture = useRef<SwipeGesture | null>(null);
  const suppressSwipeClick = useRef(false);
  const desktopSelectorRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const total = testimonials.length;
  const isTransitioning = activeTransition !== null;
  // Preserve the selected testimonial across single and paired layouts.
  const desktopPage = Math.floor(mobileIndex / 2);
  const desktopPageCount = Math.ceil(total / 2);
  const desktopStartIndex = desktopPage * 2;
  const desktopEndIndex = Math.min(desktopStartIndex + 2, total);
  const desktopTransition =
    activeTransition?.mode === "desktop" ? activeTransition : null;
  const mobileTransition =
    activeTransition?.mode === "mobile" ? activeTransition : null;
  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current);
      }

      if (transitionFrame.current) {
        cancelAnimationFrame(transitionFrame.current);
      }
    };
  }, []);

  if (total === 0) {
    return null;
  }

  function beginTransition(
    transition: CarouselTransitionRequest,
    updatePage: () => void,
  ) {
    if (isTransitioning) {
      return;
    }

    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }

    if (transitionFrame.current) {
      cancelAnimationFrame(transitionFrame.current);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      updatePage();
      return;
    }

    setActiveTransition({ ...transition, phase: "positioning" });
    updatePage();

    transitionFrame.current = requestAnimationFrame(() => {
      transitionFrame.current = requestAnimationFrame(() => {
        setActiveTransition({ ...transition, phase: "animating" });
        transitionTimer.current = setTimeout(() => {
          setActiveTransition(null);
          transitionFrame.current = null;
        }, carouselTransitionDuration[transition.mode]);
      });
    });
  }

  function showDesktopPage(page: number) {
    if (page === desktopPage) {
      return;
    }

    beginTransition(
      {
        direction: page > desktopPage ? "forward" : "backward",
        from: desktopPage,
        mode: "desktop",
        to: page,
      },
      () => {
        setMobileIndex(page * 2);
      },
    );
  }

  function showPreviousDesktopPage() {
    const previousPage =
      (desktopPage - 1 + desktopPageCount) % desktopPageCount;

    beginTransition(
      {
        direction: "backward",
        from: desktopPage,
        mode: "desktop",
        to: previousPage,
      },
      () => {
        setMobileIndex(previousPage * 2);
      },
    );
  }

  function showNextDesktopPage() {
    const nextPage = (desktopPage + 1) % desktopPageCount;

    beginTransition(
      {
        direction: "forward",
        from: desktopPage,
        mode: "desktop",
        to: nextPage,
      },
      () => {
        setMobileIndex(nextPage * 2);
      },
    );
  }

  function showPreviousMobileTestimonial() {
    const previousIndex = (mobileIndex - 1 + total) % total;

    beginTransition(
      {
        direction: "backward",
        from: mobileIndex,
        mode: "mobile",
        to: previousIndex,
      },
      () => {
        setMobileIndex(previousIndex);
      },
    );
  }

  function showNextMobileTestimonial() {
    const nextIndex = (mobileIndex + 1) % total;

    beginTransition(
      {
        direction: "forward",
        from: mobileIndex,
        mode: "mobile",
        to: nextIndex,
      },
      () => {
        setMobileIndex(nextIndex);
      },
    );
  }

  function handleSwipePointerDown(
    event: ReactPointerEvent<HTMLDivElement>,
    mode: SwipeGesture["mode"],
  ) {
    suppressSwipeClick.current = false;
    if (!event.isPrimary) {
      const gesture = swipeGesture.current;
      if (gesture && event.currentTarget.hasPointerCapture(gesture.pointerId)) {
        event.currentTarget.releasePointerCapture(gesture.pointerId);
      }
      swipeGesture.current = null;
      return;
    }
    if (event.pointerType === "mouse" || !event.isPrimary || isTransitioning) {
      return;
    }

    swipeGesture.current = {
      dragging: false,
      mode,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      width: event.currentTarget.clientWidth,
    };
  }

  function handleSwipePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = swipeGesture.current;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    const horizontalDistance = Math.abs(event.clientX - gesture.startX);
    const verticalDistance = Math.abs(event.clientY - gesture.startY);

    if (horizontalDistance > 10 && horizontalDistance > verticalDistance) {
      if (!gesture.dragging) {
        gesture.dragging = true;
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      event.preventDefault();
    }
  }

  function clearSwipeGesture(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    swipeGesture.current = null;
  }

  function handleSwipePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = swipeGesture.current;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    const horizontalDistance = event.clientX - gesture.startX;
    const verticalDistance = event.clientY - gesture.startY;
    const swipeThreshold = Math.min(
      64,
      Math.max(40, gesture.width * 0.12),
    );
    const isHorizontalSwipe =
      Math.abs(horizontalDistance) >= swipeThreshold &&
      Math.abs(horizontalDistance) > Math.abs(verticalDistance) * 1.15;
    const mode = gesture.mode;
    // Suppress the click after a drag, including drags shorter than a full swipe.
    // A new pointer down resets this, so the next deliberate tap remains native.
    suppressSwipeClick.current = gesture.dragging;

    clearSwipeGesture(event);

    if (!isHorizontalSwipe || isTransitioning) {
      return;
    }

    event.preventDefault();
    suppressSwipeClick.current = true;

    if (mode === "desktop") {
      if (horizontalDistance < 0) {
        showNextDesktopPage();
      } else {
        showPreviousDesktopPage();
      }

      return;
    }

    if (horizontalDistance < 0) {
      showNextMobileTestimonial();
    } else {
      showPreviousMobileTestimonial();
    }
  }

  function handleSwipeClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (!suppressSwipeClick.current || event.detail === 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressSwipeClick.current = false;
  }

  function handleDesktopSelectorKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    page: number,
  ) {
    const nextPage = getRovingSelectorIndex(
      event.key,
      page,
      desktopPageCount,
    );

    if (nextPage === null) {
      return;
    }

    event.preventDefault();

    if (isTransitioning) {
      return;
    }

    desktopSelectorRefs.current[nextPage]?.focus();
    showDesktopPage(nextPage);
  }

  return (
    <div
      aria-label={"Community testimonials"}
      aria-roledescription="carousel"
      className="relative mx-auto max-w-6xl overflow-clip rounded-[1.75rem] bg-brand-teal-deep px-5 py-8 shadow-[0_30px_90px_rgba(7,63,82,0.22)] max-[359px]:px-3 sm:px-8 sm:py-10 lg:px-12 lg:pb-8 lg:pt-12"
      role="region"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 size-80 rounded-full border-[56px] border-white/[0.035]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-28 size-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label={"Show previous testimonial set"}
            className="grid size-12 place-items-center rounded-full border border-white/35 bg-white/[0.16] text-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:scale-[1.04] hover:border-white/55 hover:bg-white/[0.24] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-55 disabled:hover:scale-100"
            disabled={isTransitioning || desktopPageCount < 2}
            onClick={showPreviousDesktopPage}
            type="button"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            aria-label={"Show next testimonial set"}
            className="grid size-12 place-items-center rounded-full border border-white/20 bg-white text-brand-teal-deep shadow-[0_10px_25px_rgba(0,0,0,0.16)] transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:scale-[1.04] hover:bg-brand-teal-soft hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-55 disabled:hover:scale-100"
            disabled={isTransitioning || desktopPageCount < 2}
            onClick={showNextDesktopPage}
            type="button"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <p
        aria-atomic="true"
        aria-live="polite"
        className="sr-only hidden lg:block"
        role="status"
      >
        Testimonials {desktopStartIndex + 1} and {desktopEndIndex} of {total}
      </p>
      <p
        aria-atomic="true"
        aria-live="polite"
        className="sr-only lg:hidden"
        role="status"
      >
        Testimonial {mobileIndex + 1} of {total}
      </p>

      <div
        className="relative mt-8 hidden [touch-action:pan-y_pinch-zoom] lg:grid lg:mt-10"
        onClickCapture={handleSwipeClickCapture}
        onPointerCancel={clearSwipeGesture}
        onPointerDown={(event) => handleSwipePointerDown(event, "desktop")}
        onPointerMove={handleSwipePointerMove}
        onPointerUp={handleSwipePointerUp}
      >
        {Array.from({ length: desktopPageCount }, (_, page) => {
          const pageStartIndex = page * 2;
          const isVisible =
            page === desktopPage || page === desktopTransition?.from;
          const pageTestimonials = testimonials.slice(
            pageStartIndex,
            Math.min(pageStartIndex + 2, total),
          );

          return (
            <div
              aria-hidden={page !== desktopPage}
              className={cn(
                "col-start-1 row-start-1 grid items-stretch gap-5 lg:grid-cols-2 lg:pb-6 lg:gap-6",
                !isVisible && "invisible pointer-events-none",
                desktopTransition && "pointer-events-none",
              )}
              key={page}
              inert={page !== desktopPage}
              style={getCarouselPageStyle(page, desktopTransition)}
            >
              {pageTestimonials.map((testimonial, offset) => (
                <TestimonialCard
                  index={pageStartIndex + offset}
                  key={testimonial.name}
                  secondary={offset === 1}
                  testimonial={testimonial}
                  total={total}
                />
              ))}
            </div>
          );
        })}
      </div>

      <div
        className="relative mt-8 grid [touch-action:pan-y_pinch-zoom] lg:hidden"
        onClickCapture={handleSwipeClickCapture}
        onPointerCancel={clearSwipeGesture}
        onPointerDown={(event) => handleSwipePointerDown(event, "mobile")}
        onPointerMove={handleSwipePointerMove}
        onPointerUp={handleSwipePointerUp}
      >
        {testimonials.map((testimonial, index) => {
          const isVisible =
            index === mobileIndex || index === mobileTransition?.from;

          return (
            <div
              aria-hidden={index !== mobileIndex}
              className={cn(
                "col-start-1 row-start-1",
                !isVisible && "invisible pointer-events-none",
                mobileTransition && "pointer-events-none",
              )}
              key={testimonial.name}
              inert={index !== mobileIndex}
              style={getCarouselPageStyle(index, mobileTransition)}
            >
              <TestimonialCard
                index={index}
                testimonial={testimonial}
                total={total}
              />
            </div>
          );
        })}
      </div>

      <div className="relative mt-7 hidden gap-5 lg:flex lg:flex-col xl:flex-row xl:items-end xl:justify-between">
        <div
          aria-label={"Choose a testimonial set"}
          className="grid min-w-0 grid-cols-4 items-end gap-2 xl:flex-1"
          role="group"
        >
          {Array.from({ length: desktopPageCount }, (_, page) => {
            const routeKey = testimonials[page * 2].routeKey;

            return (
              <button
                aria-label={`Show ${testimonialPageLabels[routeKey]} testimonials`}
                aria-pressed={page === desktopPage}
                className="group flex h-14 min-w-0 w-full max-w-[9.25rem] flex-col items-stretch justify-end gap-2 rounded-xl px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                key={page}
                onClick={() => showDesktopPage(page)}
                onKeyDown={(event) =>
                  handleDesktopSelectorKeyDown(event, page)
                }
                ref={(element) => {
                  desktopSelectorRefs.current[page] = element;
                }}
                tabIndex={page === desktopPage ? 0 : -1}
                type="button"
              >
                <span
                  className={cn(
                    "min-h-[2.5em] whitespace-normal text-left leading-tight text-[0.66rem] font-semibold uppercase tracking-[0.06em] transition-colors duration-200 lg:text-[0.7rem] lg:tracking-[0.09em]",
                    page === desktopPage
                      ? "text-white"
                      : "text-white/65 group-hover:text-white/85",
                  )}
                >
                  {testimonialPageLabels[routeKey]}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "block h-1.5 w-full rounded-full transition-[background-color,box-shadow] duration-200",
                    page === desktopPage
                      ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.45)]"
                      : "bg-white/20 group-hover:bg-white/55",
                  )}
                />
              </button>
            );
          })}
        </div>

        <ReviewPlatformLinks />
      </div>

      <div className="relative mt-5 lg:hidden">
        <div className="mt-1 flex items-center justify-end gap-3">
          <p aria-hidden="true" className="mr-auto text-sm font-semibold text-white">{mobileIndex + 1} of {total}</p>
          <button
            aria-label="Show previous testimonial"
            className="grid size-11 place-items-center rounded-full border border-white/35 bg-white/[0.16] text-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:scale-[1.04] hover:border-white/55 hover:bg-white/[0.24] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-55 disabled:hover:scale-100"
            disabled={isTransitioning}
            onClick={showPreviousMobileTestimonial}
            type="button"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            aria-label="Show next testimonial"
            className="grid size-11 place-items-center rounded-full bg-white text-brand-teal-deep shadow-lg transition-[transform,background-color,box-shadow] duration-200 ease-out hover:scale-[1.04] hover:bg-brand-teal-soft hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-55 disabled:hover:scale-100"
            disabled={isTransitioning}
            onClick={showNextMobileTestimonial}
            type="button"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <div className="mt-4">
          <ReviewPlatformLinks />
        </div>
      </div>
    </div>
  );
}
