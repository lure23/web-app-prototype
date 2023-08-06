import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

// Note: Configuring Vitest [1] says this file should begin with:
//        [1]: https://vitest.dev/guide/#configuring-vitest
//
//  <<
//    /// <reference types="vitest" />
//  <<
