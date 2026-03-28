import type { Config } from "../types/config";

export const resolveToken = <T extends Config>(config: T, category: string, tokenPath: string) => {
  const tokens = (config.extended?.theme?.tokens as any)?.[category] || {};
  const semanticTokens = (config.extended?.theme?.semanticTokens as any)?.[category] || {};

  const getVal = (obj: any, path: string): any => {
    const keys = path.split(".");
    let val = obj;
    for (const key of keys) {
      val = val?.[key];
    }
    return val?.value;
  };

  return getVal(tokens, tokenPath) || getVal(semanticTokens, tokenPath) || tokenPath;
};
