import { builtinModules } from 'module'
import { defineConfig } from 'tsup'

import pkg from './package.json'

export default defineConfig({
  entry: {
    material: 'src/material/index.ts',
  },
  clean: true,
  minify: true,
  format: ['esm', 'cjs'],
  external: [...builtinModules, ...Object.keys(pkg.dependencies || {})],
  dts: true,
})
