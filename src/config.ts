import type { Config } from "./types/config";
import { defaultTheme } from "./css/default-theme";
import { css } from "./css";
import { deepMerge } from "./utils/deep-merge";
import type { SystemProperties } from "./types/style-props";
import { camelToKebab } from "./utils/camel-to-kebab";

export function defineConfig<T extends Config>(config: T) {
  const mergedConfig = {
    ...config,
    reportCompatibilityIssues: config.reportCompatibilityIssues ?? true,
    supportThreshold: config.supportThreshold ?? { threshold: 50, includePartialSupport: false },
    validationMode: config.validationMode ?? "warn",
    extended: {
      ...config.extended,
      theme: config.extended?.theme ? deepMerge(defaultTheme, config.extended.theme) : defaultTheme,
    },
  } as T;
  const jsxStyleGen = css(mergedConfig);
  return {
    config: mergedConfig,
    css: jsxStyleGen,
    styles: (styles: SystemProperties<T>) => {
      const resolvedStyles = jsxStyleGen(styles);
      return Object.entries(resolvedStyles)
        .map(([prop, value]) => `${camelToKebab(prop)}: ${value};`)
        .join(" ");
    },
  };
}
