import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const marketingAnalyticsEnabled =
  process.env.NEXT_PUBLIC_ENABLE_MARKETING_ANALYTICS === "true";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
const analyticsDebug = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
const encodedGaMeasurementId = gaMeasurementId
  ? encodeURIComponent(gaMeasurementId)
  : "";

export function AnalyticsProvider() {
  return (
    <>
      <Analytics debug={analyticsDebug} />
      <SpeedInsights debug={analyticsDebug} />
      {marketingAnalyticsEnabled && gtmId ? (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            (function(w,d,s,l,i){w[l]=w[l]||[];var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',${JSON.stringify(gtmId)});
          `}
        </Script>
      ) : null}
      {marketingAnalyticsEnabled && gaMeasurementId ? (
        <>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodedGaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(gaMeasurementId)});
            `}
          </Script>
        </>
      ) : null}
      {marketingAnalyticsEnabled && metaPixelId ? (
        <Script id="meta-pixel-loader" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${JSON.stringify(metaPixelId)});
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  );
}
