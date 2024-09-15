import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import icon from 'astro-icon';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://marinaresortcavtat.com/',
	output: 'static', // hybrid, server, static = pre-rendered pages
	outDir: 'staging.marinaresortcavtat.com',
	prefetch: true,
	integrations: [sitemap(), icon(), react()],
	adapter: node({
		mode: 'standalone',
	}),
});
