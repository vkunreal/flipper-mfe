import { buildWebpack, Mode } from '@packages/mfe-configs/src'
import webpack from 'webpack'
import path from 'path'
import packageJson from './package.json'

import 'dotenv/config'

const mode = (process.env.NODE_ENV ?? 'development') as Mode
const port = ~~(process.env.PORT ?? 3000)

const { ModuleFederationPlugin } = webpack.container

export default () => {
  const config = buildWebpack({
    mode,
    port,
    buildPaths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'src', 'index.html'),
    },
  })

  if (config?.plugins) {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'bootstrap',
        remotes: {
          mfe_auth: `mfe_auth@http://localhost:3001/remoteEntry.js`,
        },
        shared: {
          ...packageJson.dependencies,
          react: {
            eager: true,
            requiredVersion: packageJson.dependencies['react'],
          },
          'react-router-dom': {
            eager: true,
            requiredVersion: packageJson.dependencies['react-router-dom'],
          },
          'react-dom': {
            eager: true,
            requiredVersion: packageJson.dependencies['react-dom'],
          },
        },
      }),
    )
  }

  return config
}
