<template>
  <ul>
    <li v-for="planet in result">{{ planet?.name }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { graphql } from './gql';

const query = graphql(`
  query GetAllPlanetsForIndex($first: Int) {
    allPlanets(first: $first) {
      planets {
        name
      }
    }
  }
`);

const { data } = await useAsyncQuery(query, { first: 10 });
const result = computed(() => data.value?.allPlanets?.planets ?? []);
</script>
