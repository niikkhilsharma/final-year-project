// export { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth } from "@/auth";

export default auth(
  async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-next-href", request.nextUrl.href);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  },

  // {
  // 	callbacks: {
  // 		authorized: ({ token }) => token?.role === 'admin',
  // 	},
  // }
);

export const config = {
  matcher:
    "/((?!api/auth|auth|images|_next/static|_next/image|favicon.ico|^/$).+)",
  //   matcher:
  // "/((?!api/auth/[^/]+$|auth|api/auth|images|_next/static|_next/image|favicon.ico|^/$|api/payment/record-payment).+)",
};
