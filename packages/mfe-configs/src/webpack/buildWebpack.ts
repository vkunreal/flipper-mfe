export type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer, buildLoaders, buildPlugins } from ".";
import { Config } from "../types/types";
import webpack from "webpack";

export const buildWebpack = (config: Config): webpack.Configuration => {
  const {
    mode,
    port,
    buildPaths: { entry, output, html },
  } = config;

  const isDev = mode !== "production";

  return {
    mode,
    entry,
    ...(isDev ? buildDevServer({ port }) : {}),
    output: {
      path: output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss", ".sass"],
    },
    plugins: buildPlugins({ isDev, htmlPath: html }),
    module: {
      rules: buildLoaders({ isDev }),
    },
  };
};
