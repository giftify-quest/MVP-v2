import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const isAuthorized = request.cookies.get("isAuthorized");
  const isAuthPage = request.nextUrl.pathname === "/auth";

  if (!isAuthorized && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (isAuthorized && isAuthPage) {
    return NextResponse.redirect(new URL("/quest", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/auth", "/quest"],
};
