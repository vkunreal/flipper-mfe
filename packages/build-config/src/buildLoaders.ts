import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

export const buildLoaders = ({
  isDev,
}: {
  isDev: boolean;
}): ModuleOptions["rules"] => {
  return [
    {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
      test: /\.module\.css$/,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
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
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.module\.s[ac]ss$/,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            esModule: false,
            modules: true,
          },
        },
        "sass-loader",
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    },
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: "ts-loader",
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
        {
          loader: "image-webpack-loader",
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
  ];
};
