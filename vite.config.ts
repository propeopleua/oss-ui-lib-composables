import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      entry: {
        'use-form': resolve(__dirname, 'src', 'form', 'useForm.ts'),
        'use-list': resolve(__dirname, 'src', 'list', 'useList.ts'),
        'use-tmpl-refs': resolve(__dirname, 'src', 'tmpl', 'useTmplRefs.ts'),
        'use-upside-down': resolve(__dirname, 'src', 'upside-down', 'useUpsideDown.ts'),
      },
      name: 'oss-composable',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
          lodash: 'lodash'
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
