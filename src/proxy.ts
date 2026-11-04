import { NextRequest, NextResponse } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

function getLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  const first = header.split(",")[0]?.trim().slice(0, 2).toLowerCase();
  return locales.includes(first) ? first : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;
  request.nextUrl.pathname = `/${getLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|screenshots|.*\\..*).*)"],
};
