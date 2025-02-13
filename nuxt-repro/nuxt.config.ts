// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxtjs/sanity"],

  sanity: {
    apiVersion: "2025-02-13",
    projectId: "3jds3t8i",
    dataset: "production",
    visualEditing: {
      studioUrl: "http://localhost:3333",
      token:
        "skKm1OissDdk5gILoLTaejGJa72bKFvabsnxi9vnV2FWzNTgAhj4AjlVQyMLN30Z7fBVU9DsHHemBH15q9dqd33pbwFGekYmviMPtheFzy3r8mEgZwe7zBOQxfBGSd38XVbOu6I9rdTGTpdXMhgHUkHdoyjNOSDmY0xzBDjYSe2d1JEUPO7l",
    },
  },

  compatibilityDate: "2025-02-13",
});
