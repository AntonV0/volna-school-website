import Image from "next/image";
import Link from "next/link";
import { HeaderTrialLink } from "./header-trial-link";
import { FooterEmailCopy } from "./footer-email-copy";
import { siteContent } from "@/content/site-content";
import { VOLNA_FOOTER_LOGOS } from "@/lib/brand-assets";
import type { Locale } from "@/lib/i18n/config";
import { courseRouteKeys, getLocalizedPath, legalRouteKeys } from "@/lib/i18n/routing";
import s from "./site-footer.module.css";

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const logo = VOLNA_FOOTER_LOGOS[locale];
  const english = locale === "en";
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className={s.footer}>
      <svg className={s.wave} aria-hidden="true" viewBox="0 0 1440 72" preserveAspectRatio="none">
        <path d="M0 0h1440v18c-235 48-502 55-761 23C420 9 200 16 0 52V0Z" fill="currentColor" />
      </svg>
      <div className={s.inner} data-footer-grid>
        <div className={s.main}>
          <div className={s.brand} data-footer-identity>
            <Link href={getLocalizedPath(locale, "home")} aria-label={content.navigation.brandLabel}>
              <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} sizes="(max-width: 639px) 200px, 220px" style={{ transform: `translateX(-${(logo.opticalInsetLeft / logo.width) * 100}%)` }} />
            </Link>
            <p>{english ? "Learn Russian at every stage, from first words to confident conversation and exam success." : content.footer.intro}</p>
          </div>
          <nav className={s.navigation} aria-label={content.footer.navLabel}>
            <div>
              <h2>{content.footer.coursesTitle}</h2>
              <ul>{courseRouteKeys.map(key => <li key={key}><Link href={getLocalizedPath(locale, key)}>{content.routeLabels[key]}</Link></li>)}</ul>
            </div>
            <div>
              <h2>{content.footer.usefulTitle}</h2>
              <ul>
                <li><Link href={getLocalizedPath(locale, "about")}>{content.routeLabels.about}</Link></li>
                <li><Link href={getLocalizedPath(locale, "termDates")}>{content.routeLabels.termDates}</Link></li>
                <li><HeaderTrialLink locale={locale} variant="unstyled" className={s.trial}>{english ? "Free trial lesson" : content.routeLabels.registration}</HeaderTrialLink></li>
              </ul>
            </div>
          </nav>
          <div className={s.contact}>
            <div className={s.contactIntro}>
              <h2>{english ? "Get in touch" : content.footer.contact.title}</h2>
              <p>{english ? "Not sure where to start? Talk to us about the right course for you." : content.footer.ctaBody}</p>
            </div>
            <div className={s.contactActions}>
              <a className={s.phone} href="tel:+447881764892">{content.footer.contact.phone}</a>
              <div className={s.emailGroup}>
                <FooterEmailCopy email={content.footer.contact.email} locale={locale} />
                <a className={s.email} href={`mailto:${content.footer.contact.email}`}>
                  {content.footer.ctaButtonLabel}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.legal} data-footer-legal>
          <span>© 2020{currentYear > 2020 ? `–${currentYear}` : ""} Volna School</span>
          <div>{legalRouteKeys.map(key => <Link key={key} href={getLocalizedPath(locale, key)}>{content.routeLabels[key]}</Link>)}</div>
        </div>
      </div>
    </footer>
  );
}
