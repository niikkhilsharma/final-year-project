export { auth as middleware } from "@/auth";

/* 
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { AuthConfig } from "./auth.config";
import { EdgePrisma } from "./lib/prisma/edge";

const {auth} = NextAuth({
    ...AuthConfig,
    adapter:PrismaAdapter(EdgePrisma)
}) 
export const middleware = auth

export const config = {
    matcher: [
        '/((?!sql|_next/static|_next/image|favicon.ico).*)',
      ],
  }
 */
