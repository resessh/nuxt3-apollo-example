import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint:
          ' https://swapi-graphql.netlify.app/.netlify/functions/index',
      },
    },
  },
});
