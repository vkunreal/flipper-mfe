export type Mode = "production" | "development";

interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface Config {
  buildPaths: BuildPaths;
  mode: Mode;
  port: number;
}
