import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://riverscape.ca',
	output: 'static',
	outDir: './public_html/',
	prefetch: true,
	integrations: [sitemap(), icon()],
	adapter: node({
		mode: 'standalone',
	}),
});
