import { db } from "@/database";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const { auth, handlers: { GET, POST}} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  secret: 'ajMQ3HU7MP54vML3+a8jWHzieUZ9Wgh/Z7FA2r+RFIw=',
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt"}
})