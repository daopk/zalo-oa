import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: true,
  external: ['axios', 'https-proxy-agent', 'ohash', 'form-data'],
})
