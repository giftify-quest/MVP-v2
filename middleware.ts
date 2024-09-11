import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const isAuthPage = request.nextUrl.pathname === "/auth";
  const isQuestPage = request.nextUrl.pathname === "/quest";

  if (!isAuthPage && !isQuestPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/auth", "/quest"],
};
