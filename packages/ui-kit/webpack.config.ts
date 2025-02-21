import { buildWebpack, Mode } from '@packages/mfe-configs'
import path from 'path'

import 'dotenv/config'

const mode = (process.env.NODE_ENV ?? 'development') as Mode
const port = ~~(process.env.PORT ?? 8016)

export default () => {
  const config = buildWebpack({
    mode,
    port,
    buildPaths: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'src', 'index.html'),
    },
  })

  return config
}
