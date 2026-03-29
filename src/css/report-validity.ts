import type { Config } from "../types/config";
import { canIEmailCSSProperties } from "../can-i-email/maps/properties";
import { CompatibilityError } from "../exceptions/compatibility-error";
import type { ProcessedItem } from "../scripts/can-i-email";
import * as c from "../utils/console-colors";
import { camelToKebab } from "../utils/camel-to-kebab";

const propertiesMap = canIEmailCSSProperties as Record<string, ProcessedItem>;

type ValidationCache = {
  reportedProps: Set<string>;
};

export const reportValidity = <T extends Config>(
  config: T & { __cache?: ValidationCache },
  prop: string,
  _value: string,
) => {
  const mode = config.validationMode || "warn";
  if (mode === "none") return;

  config.__cache ??= { reportedProps: new Set() };

  if (config.__cache.reportedProps.has(prop)) return;
  config.__cache.reportedProps.add(prop);

  const thresholdConfig = config.supportThreshold || {
    threshold: 50,
    includePartialSupport: false,
  };
  const kebabProp = camelToKebab(prop);

  const data = propertiesMap[kebabProp];

  if (!data) return;

  const { coverage } = data;
  let score = coverage.support;
  if (thresholdConfig.includePartialSupport) {
    score += coverage.partial;
  }

  if (score < thresholdConfig.threshold) {
    const formattedProp = c.bold(prop);
    const scoreColor = score < thresholdConfig.threshold / 2 ? c.red : c.yellow;
    const formattedScore = scoreColor(`${score.toFixed(1)}%`);
    const formattedThreshold = c.bold(`${thresholdConfig.threshold}%`);
    const formattedUrl = c.cyan(data.url);

    const message = `Low support for ${formattedProp}: ${formattedScore} (min ${formattedThreshold}) (${formattedUrl})`;

    if (mode === "error") {
      throw new CompatibilityError(message);
    } else if (mode === "warn") {
      console.warn(`[email-css] ${message}`);
    }
  }
};
