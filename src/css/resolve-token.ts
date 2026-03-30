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

  const isReference = (val: any): val is string =>
    typeof val === "string" && val.startsWith("{") && val.endsWith("}");

  const unwrap = (ref: string) => ref.slice(1, -1);

  const resolve = (path: string, seen = new Set<string>()): any => {
    if (seen.has(path)) {
      throw new Error(`Circular token reference detected: ${path}`);
    }
    seen.add(path);

    const value = getVal(tokens, path) ?? getVal(semanticTokens, path) ?? path;
    if (isReference(value)) {
      return resolve(unwrap(value), seen);
    }

    return value;
  };

  return resolve(tokenPath);
};
