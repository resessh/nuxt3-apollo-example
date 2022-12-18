import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['./**/*.vue'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      plugins: [],
    },
  },
};

export default config;
