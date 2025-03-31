
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import google from "next-auth/providers/google";
import Linkedin from "next-auth/providers/linkedin";

import { FieldValues } from "react-hook-form";

import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs';


export default {
    providers: [
        Linkedin({
            clientId: process.env.AUTH_LINKEDIN_ID,
            clientSecret: process.env.AUTH_LINKEDIN_SECRET
        }),
        google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        
    ]
} satisfies NextAuthConfig;
