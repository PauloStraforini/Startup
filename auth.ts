import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
    pages: {
      signIn: '/',
    },
    callbacks: {
      async session({session}) {

        return session;
      },
      
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
});