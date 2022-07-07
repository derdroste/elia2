import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    build: {
        transpile: [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
        ]
    },
    pwa: {
        manifest: {
            name: 'My Awesome App',
            lang: 'de',
        },
        workbox: {
            enabled: true
        }
    },
    modules: [
        '@kevinmarrec/nuxt-pwa'
    ],
    vite: {
        optimizeDeps: {
            include: ['date-fns-tz/esm/formatInTimeZone']
        }
    },
    nitro: {
        plugins: [
            "~/server/index.ts",
        ]
    },
})
