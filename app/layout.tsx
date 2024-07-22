import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans(
    {
        subsets: ["latin"],
        variable: "--font-dm-sans"
    }
);

export const metadata: Metadata = {
    title: "Frameio Clothing | Simple luxury products to express your personal styles",
    description: "Frameio Clothing | Simple luxury products to express your personal styles",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${DMSans.variable} font-dm-sans antialiased text-brand-black text-normal selection:bg-brand-blue selection:text-white`}>
                <Header />

                <main className="px-4 pb-12 lg:pb-28 lg:px-24">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
