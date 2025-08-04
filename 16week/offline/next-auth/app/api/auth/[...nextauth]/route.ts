import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        return {
          id: "1",
          name: "shashwat",
          email: "abc@xyz.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
export const GET = handler;
export const POST = handler;
