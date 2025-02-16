export const buildDevServer = ({ port }: { port: number }) => {
  return {
    devtool: "inline-source-map",
    devServer: {
      port,
      historyApiFallback: true,
    },
  };
};
