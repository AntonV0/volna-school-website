import { NextResponse, type NextRequest } from "next/server";

const russianHostnames = new Set(["ru.volnaschool.com"]);

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname =
    request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ??
    request.headers.get("host")?.split(":")[0]?.trim() ??
    request.nextUrl.hostname;

  if (!russianHostnames.has(hostname) || pathname.startsWith("/ru")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/ru" : `/ru${pathname}`;
  url.search = search;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
