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
				"brand-purple": "#9747ff",
				"brand-light-purple": "#f5edff",
				"brand-black": "#0d1421",
				"brand-red": "rgba(255, 0, 0, 1)",
				"brand-gray": "#586283",
			},
			fontFamily: {
				outfit: ["var(--font-outfit)"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
export default config;
