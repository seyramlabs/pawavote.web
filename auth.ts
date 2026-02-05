/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface Token {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry: number;
  refreshTokenExpiry: number;
  user: any;
}

// Use internal URL for server-side requests if defined
// const API_URL = process.env.NEXT_PUBLIC_API_URL || `http://api.localhost`;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const MyRefreshTokenHandler = async (token: Token) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/admin/refresh`,
      {
        refresh_token: token.refreshToken,
      }
    );

    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      accessTokenExpiry: data.access_token_expires_at,
      refreshTokenExpiry: data.refresh_token_expires_at,
    };
  } catch {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
//   trustHost: process.env.NEXTAUTH_TRUST_HOST === "true",

  providers: [
    Credentials({
      credentials: {
        phoneNumber: { label: "Phone number", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // console.log("🚀 ~ authorize: ~ credentials:", credentials)

        try {
          const { data } = await axios.post(
            `${API_URL}/user/login`,
            {
              phoneNumber: credentials?.phoneNumber,
              password: credentials?.password,
            }
          );
          // console.log("🚀 ~ data:", data);
          if (!data.access_token) return null;
          if (data.access_token) {
            const nextAuthUser = {
              id: data?.user?.id,
              token: data.access_token,
              refreshToken: data.refresh_token,
              tokenExpiry: data.access_token_expires_at,
              refreshTokenExpiry: data.refresh_token_expires_at,
              user: data.user,
            };
            return nextAuthUser;
          }

          // console.log("🚀 ~ authorize: ~ data:", data)
          return null;
        } catch (error: any) {
          console.log("🚀 ~ authorize: ~ error:", error);
          console.error(
            "authe-------- ~ error:",
            error.response?.data || error.message
          );
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      console.log("🚀 ~ user0:", user);
      if (user) {
        token.accessToken = user.token;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpiry = user.tokenExpiry;
        token.refreshTokenExpiry = user.refreshTokenExpiry;
        token.user = user.user;
      }

      const currentTimestamp = Math.floor(Date.now() / 1000);

      // 1️⃣ Check if refresh token itself is expired → log out user
      if (currentTimestamp >= (token as unknown as Token).refreshTokenExpiry) {
        console.warn("⚠️ Refresh token expired, forcing logout");
        return {
          ...token,
          error: "RefreshTokenExpired",
        };
      }

      // 2️⃣ Check if access token is still valid
      const remainingTime =
        (token as unknown as Token).accessTokenExpiry - 5 * 60;
      if (currentTimestamp < remainingTime) {
        return token;
      }

      // 3️⃣ Try refreshing access token
      try {
        const refreshedToken = await MyRefreshTokenHandler(
          token as unknown as Token
        );

        console.log("🚀 ~ refreshedToken:", refreshedToken);
        if ((refreshedToken as any).error) {
          return {
            ...token,
            error: "RefreshAccessTokenError==",
          };
        }

        return {
          ...token,
          accessToken: refreshedToken.accessToken,
          refreshToken: refreshedToken.refreshToken,
          accessTokenExpiry: refreshedToken.accessTokenExpiry,
          refreshTokenExpiry: refreshedToken.refreshTokenExpiry,
        };
      } catch (error) {
        console.error("Error refreshing token:", error);
        return {
          ...token,
          error: "RefreshAccessTokenError-----",
        };
      }
    },

    session: async ({ session, token }) => {
      console.log("🚀 ~r token:", token);
      console.log("🚀 ~r session:", session);

      if (token) {
        const user = token.user;

        session.user.id = user.id;
        session.user.name = user.name;
        session.user.status = user.status;
        session.user.username = user.username;
        session.user.phone = user.phone;
        session.user.adminType = user.adminType;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.user.balance = user.balance;
        session.user.deposit = user.deposit;
        session.user.totalDeposit = user.totalDeposit;
        session.user.totalWithdrawal = user.totalWithdrawal;
        // session.accessTokenExpiry = token.accessTokenExpiry
        // session.refreshTokenExpiry = token.refreshTokenExpiry
      }

      console.log("🚀 ~l token:", token);

      // console.log("🚀 ~ --------session: ~ session:", token)
      return session;
    },
       redirect({ url, baseUrl }) {
      // Always redirect to dashboard after login
      if (url.startsWith(baseUrl)) return url;
      return baseUrl + "/products";
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  secret: process.env.AUTH_SECRET,
});