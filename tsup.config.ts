import { builtinModules } from 'module'
import { defineConfig } from 'tsup'
import { copy } from 'esbuild-plugin-copy'

import pkg from './package.json'

export default defineConfig({
  entry: {
    material: 'src/material/index.ts',
    index: 'src/index.ts',
  },
  esbuildPlugins: [
    copy({
      resolveFrom: 'cwd',
      assets: [
        {
          from: './vendor/vscode-material-icon-theme/icons/*',
          to: './dist/material',
        },
      ],
    }),
  ],
  shims: true,
  clean: true,
  minify: true,
  format: ['esm', 'cjs'],
  external: [...builtinModules, ...Object.keys(pkg.dependencies || {})],
  dts: true,
})
