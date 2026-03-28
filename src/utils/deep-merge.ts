export function deepMerge(target: any, source: any): any {
  if (
    typeof target !== "object" ||
    target === null ||
    typeof source !== "object" ||
    source === null
  ) {
    return source;
  }

  const result = { ...target };

  Object.keys(source).forEach((key) => {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      if (result[key] && typeof result[key] === "object") {
        result[key] = deepMerge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    } else {
      result[key] = source[key];
    }
  });

  return result;
}
