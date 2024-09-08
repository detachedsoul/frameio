import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit(
    {
        subsets: ["latin"],
        variable: "--font-outfit"
    }
);

export const metadata: Metadata = {
    title: "Frameio Stores | Simple luxury products to express your personal styles",
    description: "Frameio Stores | Simple luxury products to express your personal styles",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
		<html
			className="custom-scrollbar"
			lang="en"
		>
			<head>
				<link
					rel="shortcut icon"
					href="/favicon.png"
					type="image/x-icon"
				/>
			</head>

			<body
				className={`${outfit.variable} font-outfit antialiased text-brand-black text-normal leading-7 selection:bg-brand-purple selection:text-white`}
			>
				<Header />

				<main className="px-4 pb-12 sm:px-8 md:px-4 lg:pb-28 lg:px-24">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
