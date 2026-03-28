import type { Config } from "./types/config";
import { defaultTheme } from "./types/theme/default";
import { css } from "./css";
import { deepMerge } from "./utils/deep-merge";

export function defineConfig<T extends Config>(config: T) {
  const { extended, ...rest } = config;

  const mergedConfig: Config = {
    supportThreshold: "75",
    validationMode: "warn",
    ...rest,
    extended: {
      ...extended,
      theme: extended?.theme ? deepMerge(defaultTheme, extended.theme) : defaultTheme,
    },
  };

  return { config: mergedConfig, css: css(mergedConfig) };
}
