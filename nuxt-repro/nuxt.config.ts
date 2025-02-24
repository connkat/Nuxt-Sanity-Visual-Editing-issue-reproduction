const isProduction = !!process.env.IS_PRODUCTION;

export default defineNuxtConfig({
	ssr: true,

	modules: [
		'@antfu/eslint-config',
		'@nuxtjs/color-mode',
		'@nuxtjs/device',
		'@nuxt/image',
		'@nuxtjs/i18n',
		'@nuxtjs/google-fonts',
		'@nuxtjs/sanity',
		'@nuxtjs/seo',
		'@nuxtjs/tailwindcss'
	],

	seo: {
		automaticDefaults: false,
	},
	site: {
		url: 'https://hiboop.com',
		name: 'HiBoop!',
		favicon: true,
	},
	sanity: {
		projectId: process.env.NUXT_SANITY_PROJECT_ID || 'm95ktlhh',
		dataset: process.env.NUXT_SANITY_DATASET,
		useCdn: false,
		apiVersion: process.env.NUXT_SANITY_API_VERSION || '2025-02-11',
		visualEditing: {
			studioUrl:
				process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
			token: process.env.NUXT_SANITY_API_READ_TOKEN,
		},
	},


	app: {
		baseURL: '/',
		pageTransition: {
			name: 'page',
			mode: 'in-out',
		},
	},

	image: {
		dir: 'assets/img',
		format: ['avif', 'webp'],
	},

	colorMode: {
		classSuffix: '',
		dataValue: 'theme',
	},

	nitro: {
		firebase: {
			gen: 2,
			nodeVersion: '20',
		},
		routeRules: {
			'/insights/**': { ssr: true },
		},
	},

	css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
	typescript: { strict: false },

	runtimeConfig: {
		postmarkApiKey: process.env.NUXT_POSTMARK_API_KEY || '',
		public: {
			siteUrl: 'https://hiboop.com',
			isProduction,
			sanity: {
				projectId: process.env.NUXT_SANITY_PROJECT_ID || 'm95ktlhh',
			},
		},
	},

	experimental: {
		restoreState: true,
	},

	devtools: {
		enabled: false,
	},

	vite: {
		// workaround for open issue:
		// https://github.com/nuxt-modules/sanity/issues/1159#issuecomment-2662477319
		optimizeDeps: {
			include: ['shallowequal', 'lodash/startCase.js'],
		},
		server: {
			watch: {
				usePolling: true,
			},
			hmr: {
				port: 3000,
			},
			cors: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': '*',
				'Access-Control-Allow-Headers': '*',
			},
		},
	},

	compatibilityDate: '2024-08-12',
});
