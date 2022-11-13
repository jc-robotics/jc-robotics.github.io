import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	build: {
		minify: 'esbuild',
		target: 'es2022' // Top level await needed
	},
	plugins: [sveltekit()]
};

export default config;
