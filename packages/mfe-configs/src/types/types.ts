export type Mode = "production" | "development";

interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface Config {
  mode: Mode;
  port: number;
  buildPaths: BuildPaths;
  alias?: {
    [key: string]: string;
  };
}
