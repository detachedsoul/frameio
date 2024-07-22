import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "rgba(56, 97, 251, 1)",
                "brand-black": "rgba(13, 20, 33, 1)",
                "brand-red": "rgba(255, 0, 0, 1)",
                "brand-gray": "rgba(88, 98, 131, 1)",
            },
            fontFamily: {
                "dm-sans": ["var(--font-dm-sans)"]
            }
        },
    },
    plugins: [],
};
export default config;
