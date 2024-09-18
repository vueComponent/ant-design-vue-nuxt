import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt(undefined, {
  ignores: ['dist', 'node_modules', '**/*.json', '**/*.md', '.github'],
});
