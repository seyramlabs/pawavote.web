/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface MyUser {
    id: string
    name: string;
    username: string;
    phone: string;
    role: string;
    adminType: string
    status: string;
    balance: int;
    deposit:int;
    totalDeposit:int;
    totalWithdrawal:int;
}
// types/next-auth.d.ts

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        refreshToken: string;
        accessTokenExpiry: string;
        refreshTokenExpiry: string;
        user: MyUser;
    }
}
declare module "next-auth" {
    interface Session {
        user: {
            id: string; // 👈 Add this line
            name: string | null;
            status: string
            username: string | null;
            phone: string
            adminType: string
            accessTokenExpiry: string
            refreshTokenExpiry: string

            balance:int | null;
            deposit:int | null;
            totalWithdrawal: int | null;
            totalDeposit: int | null
            // balance: number
        };
        accessToken?: string;
        refreshToken?: string;
    }
}

declare module "next-auth" {
    interface User {
        token: string;
        refreshToken: string;
        tokenExpiry: string;
        refreshTokenExpiry: string;
        user: MyUser;
        id: number;
        // balance: number;
    }
}