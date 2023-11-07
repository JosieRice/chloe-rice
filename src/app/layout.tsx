import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    description: "Front end developer",
    title: "Chloë Rice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html data-theme="forest" lang="en">
            <body className={`${inter.className} pb-16`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
