import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import ignoreImport from 'rollup-plugin-ignore-import'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css'],
    }),
    ignoreImport({
      // Ignore fonts.scss and .css file imports while building the bundle
      include: ['**/*_fonts.scss', '**/*.stories'],
      extensions: ['.stories'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;',
    }),
  ],
}
