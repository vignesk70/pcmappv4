// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui",
    'nuxt-file-storage'
  ],
  fileStorage: {mount:'/Users/vignes/Documents/Development/pcmappv3/pcmappv4/public/uploads'
  },
  
})