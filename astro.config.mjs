import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    // site: "http://floorandcarpetsmx.com/",
    site: "http://floorandcarpetsmx.com/",
    integrations: [mdx(), sitemap(), icon()],
    vite: {
        plugins: [tailwindcss()],
    },
});
