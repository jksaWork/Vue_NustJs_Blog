export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  auth: {
    strategies: {
      "laravelJWT": {
        provider: "laravel/jwt",
        url: "http://localhost:8000/",
        token: {
          property: "access_token",
          global: true,
          required: true,
          type: "bearer",
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: "api/auth/login",
            method: "post",
            propertyName: 'access_token'
          },
          logout: {
            url: "api/auth/logout",
            method: "post",
          },
          user: {
            url: "api/auth/user-profile",
            method: "get",
            propertyName: false
          },
        },
        redirect: {
          login: "/login",
          logout: "/logout",
          home: "admin/Dashboard",
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
