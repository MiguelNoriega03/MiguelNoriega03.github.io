import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://innercircle.mx',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        mdx(),
        sitemap(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ]
});