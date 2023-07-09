import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		// vite:{
		// 	resolve:{
		// 		alias:{
		// 			"@img":path.resolve("src/assets/images"),
		// 			"@lib":path.resolve("src/lib"),
		// 			"@components":path.resolve("src/lib/components"),
		// 			"@lottie":path.resolve("src/assets/lottie" ) 
		// 		}
		// 	}
		// },
		
		alias:{
			"@imgs":"src/lib/assets/images",
			"@srclib":"src/lib",
			"@components":"src/lib/components",
			"@lottie":"src/lib/assets/lottie",
			"@routes":"src/routes"  
		}
	}
};

export default config;
