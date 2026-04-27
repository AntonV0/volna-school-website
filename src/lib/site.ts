const productionSiteUrl = "https://www.volnaschool.com";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl =
  configuredSiteUrl &&
  !configuredSiteUrl.includes("localhost") &&
  !configuredSiteUrl.includes("127.0.0.1")
    ? configuredSiteUrl
    : productionSiteUrl;
