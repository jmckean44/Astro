import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://riverscape.ca',
	output: 'static',
	root: './staging.riverscape.ca/',
	prefetch: true,
	integrations: [sitemap(), icon()],
	adapter: node({
		mode: 'standalone',
	}),
});
