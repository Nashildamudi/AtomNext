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
                primary: {
                    violet: '#7F00FF',
                    blue: '#00F0FF',
                },
                dark: {
                    900: '#0A0A0A',
                    800: '#121212',
                    700: '#1A1A1A',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(127, 0, 255, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(127, 0, 255, 0.8)' },
                }
            },
        },
    },
    plugins: [],
};

export default config;
