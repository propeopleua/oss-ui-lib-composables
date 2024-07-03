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
        usePopper: resolve(__dirname, 'src', 'popper', 'usePopper.ts'),
        useForm: resolve(__dirname, 'src', 'form', 'useForm.ts'),
        useList: resolve(__dirname, 'src', 'list', 'useList.ts'),
        useTmplRefs: resolve(__dirname, 'src', 'tmpl', 'useTmplRefs.ts'),
        useUpsideDown: resolve(__dirname, 'src', 'upside-down', 'useUpsideDown.ts'),
        scrollTo: resolve(__dirname, 'src', 'utils', 'scrollTo.ts'),
        recordToFormData: resolve(__dirname, 'src', 'utils', 'recordToFormData.ts'),
        getCached: resolve(__dirname, 'src', 'services', 'cache', 'get-cached.ts'),
        dropCached: resolve(__dirname, 'src', 'services', 'cache', 'drop-cached.ts'),
      },
      name: 'oss-composable',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
          lodash: 'lodash',
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
