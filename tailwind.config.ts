import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "rgba(56, 97, 251, 1)",
                "brand-black": "rgba(13, 20, 33, 1)",
                "brand-red": "rgba(255, 0, 0, 1)",
            },
            fontFamily: {
                "dm-sans": ["var(--font-dm-sans)"]
            }
        },
    },
    plugins: [],
};
export default config;
