import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import {
  ProgressPlugin,
  HotModuleReplacementPlugin,
  Configuration,
} from "webpack";

export const buildPlugins = ({
  isDev,
  htmlPath,
}: {
  isDev: boolean;
  htmlPath: string;
}): Configuration["plugins"] => {
  return [
    new HtmlWebpackPlugin({
      template: htmlPath,
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    !isDev &&
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css",
      }),
    isDev && new HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    isDev && new ProgressPlugin(),
  ].filter(Boolean);
};
