import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Please enter your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Please enter your Password",
        },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        try {
          const response = await axios.post(
            "https://graduate-us-backend-gkli.onrender.com/user/login",
            {
              email: email,
              password: password,
            }
          );
          const user = response.data;
          if (user)
            return user; // Resolve with the user object if sign-in is successful
          else return null;
        } catch (error) {
          console.log(error);
          throw new Error("Invalid credentials!"); // Throw an error if the credentials are invalid
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.id_token) {
        token.token = account.id_token;
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      const response = await axios.post(
        "https://graduate-us-backend-gkli.onrender.com/user/Googlelogin",
        {
          name: token.name,
          email: token.email,
          pic: token.picture,
        }
      );
      session.user = token;
      session.user._id = response.data._id;

      return session;
    },
  },
};

export default NextAuth(authOptions);
