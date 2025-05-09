import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";


export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://www.yourwebsite.com", // update me!
  integrations: [sitemap(), icon()],
});