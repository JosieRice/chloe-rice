import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import Script from "next/script";

import "./globals.css";
import "@contentful/live-preview/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    description: "Front end developer",
    title: "Chloë Rice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { isEnabled } = draftMode();

    return (
        <html data-theme="forest" lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
                {isEnabled && <Script src="/live-preview.mjs" />}
            </body>
        </html>
    );
}
