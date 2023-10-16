import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["forest"],
    },
};
export default config;
