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
                primary: '#0A66C2',
                secondary: '#FF6B35',
                dark: '#0F172A',
                lightBg: '#F8FAFC',
                cardBg: '#FFFFFF',
            },
        },
    },
    plugins: [],
};
export default config;
