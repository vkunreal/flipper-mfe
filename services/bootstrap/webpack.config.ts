import { buildWebpack, Mode } from "@packages/build-config";
import path from "path";
import "dotenv/config";

const mode = (process.env.NODE_ENV ?? "development") as Mode;
const port = ~~(process.env.PORT ?? 3000);

export default () => {
  return buildWebpack({
    mode,
    port,
    buildPaths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "src", "index.html"),
    },
  });
};
