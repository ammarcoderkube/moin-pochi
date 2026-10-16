import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    // Disable preflight to protect existing Webflow & custom portfolio styling from browser resets
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
