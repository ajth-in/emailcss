import { expect, test, vi } from "vite-plus/test";
import { reportValidity } from "./report-validity";
import type { Config } from "../types/config";
import { CompatibilityError } from "../exceptions/compatibility-error";

test("reportValidity should skip if mode is none", () => {
  const config: Config = { validationMode: "none" };
  const spy = vi.spyOn(console, "warn");
  reportValidity(config, "accentColor", "red");
  expect(spy).not.toHaveBeenCalled();
});

test("reportValidity should warn if mode is warn and support is below threshold", () => {
  // accent-color has ~15.22% support
  const config: Config = { 
    validationMode: "warn",
    supportThreshold: { threshold: 50, includePartialSupport: false }
  };
  const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
  reportValidity(config, "accentColor", "red");
  expect(spy).toHaveBeenCalled();
  const call = spy.mock.calls[0][0];
  expect(call).toContain("accentColor");
  expect(call).toContain("15.22%");
  spy.mockRestore();
});

test("reportValidity should throw CompatibilityError if mode is error and support is below threshold", () => {
  const config: Config = { 
    validationMode: "error",
    supportThreshold: { threshold: 50, includePartialSupport: false }
  };
  expect(() => {
    reportValidity(config, "accentColor", "red");
  }).toThrow(CompatibilityError);
});

test("reportValidity should pass if support is above threshold", () => {
  // background-color has ~90.20% support
  const config: Config = { 
    validationMode: "error",
    supportThreshold: { threshold: 50, includePartialSupport: false }
  };
  expect(() => {
    reportValidity(config, "backgroundColor", "red");
  }).not.toThrow();
});

test("reportValidity should handle partial support if configured", () => {
  // background-blend-mode has ~58.82% support and ~3.92% partial
  // Total = 62.74%
  const config: Config = { 
    validationMode: "error",
    supportThreshold: { threshold: 60, includePartialSupport: true }
  };
  expect(() => {
    reportValidity(config, "backgroundBlendMode", "multiply");
  }).not.toThrow();
});

test("reportValidity should fail if partial support is not included and main support is below threshold", () => {
  const config: Config = { 
    validationMode: "error",
    supportThreshold: { threshold: 60, includePartialSupport: false }
  };
  expect(() => {
    reportValidity(config, "backgroundBlendMode", "multiply");
  }).toThrow(CompatibilityError);
});
