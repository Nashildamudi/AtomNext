import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "atomnext - Premium Web Development & Digital Innovation",
    description: "Building the future, pixel by pixel. Premium web development and digital innovation for tech-focused enterprises and high-growth startups.",
    keywords: ["web development", "digital innovation", "Next.js", "React", "Three.js"],
    authors: [{ name: "atomnext" }],
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
