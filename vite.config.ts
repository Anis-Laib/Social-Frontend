import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { webSocketServer } from './wspluginvite'

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
