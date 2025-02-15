import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ReactRefreshTsPlugin from 'react-refresh-typescript'
import webpack from 'webpack'
import path from 'path'
const { ModuleFederationPlugin } = webpack.container

interface EnvVariables {
  NODE_ENV: 'development' | 'production'
}

export default (env: EnvVariables) => {
  const isDevelopment = env.NODE_ENV === 'development'

  return {
    mode: isDevelopment ? 'development' : 'production',

    entry: './src/index.ts',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[hash].js',
      clean: true,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                ...(isDevelopment && {
                  getCustomTransformers: () => ({
                    // before: [require('react-refresh-typescript').default()],
                    before: [ReactRefreshTsPlugin],
                  }),
                }),
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.module\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /\.module\.scss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.module\.s[ac]ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: true,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new FaviconsWebpackPlugin({
        logo: './public/favicon.ico',
        mode: 'light',
        prefix: 'icons-[hash]/',
        inject: true,
      }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      !isDevelopment &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].[contenthash].css',
        }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV ?? 'development',
        ),
        'process.env.API_URL': JSON.stringify(process.env.API_URL),
      }),
      new ModuleFederationPlugin({
        name: 'bootstrap',
        filename: 'remoteEntry.js',
        remotes: {
          mfe_auth: 'mfe_auth@http://localhost:3001/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
          typescript: { singleton: true, eager: true },
        },
      }),
    ],

    optimization: {
      minimize: !isDevelopment,
      minimizer: [new TerserPlugin()],
    },

    devServer: {
      static: path.resolve(__dirname, 'dist'),
      hot: true,
      historyApiFallback: true,
      port: 3000,
    },
  }
}
