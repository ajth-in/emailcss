import { expect, test, describe } from "vite-plus/test";
import { defineConfig } from "../config";

describe("css function", () => {
  test("should resolve theme tokens in jsx mode (default)", () => {
    const { css } = defineConfig({
      extended: {
        theme: {
          tokens: {
            colors: {
              customBrand: { value: "#2754C5" },
            },
            spacing: {
              customContainer: { value: "20px" },
            },
          },
        },
      },
    });

    const styleObj = css({
      backgroundColor: "customBrand",
      padding: "customContainer",
      fontSize: "16px",
    });

    expect(styleObj).toEqual({
      backgroundColor: "#2754C5",
      padding: "20px",
      fontSize: "16px",
    });
  });

  test("should resolve theme tokens in raw mode via styles()", () => {
    const { styles } = defineConfig({
      extended: {
        theme: {
          tokens: {
            colors: {
              customBrand: { value: "#2754C5" },
            },
          },
        },
      },
    });

    const styleStr = styles({
      backgroundColor: "customBrand",
      color: "blue.500",
    });

    expect(styleStr).toContain("background-color: #2754C5;");
    expect(styleStr).toContain("color: #2BDAE0;");
  });

  test("should handle missing tokens by returning the literal value", () => {
    const { css } = defineConfig({});

    const styleObj = css({
      backgroundColor: "non-existent",
    });

    expect(styleObj.backgroundColor).toBe("non-existent");
  });

  test("should return kebab-case keys in raw mode via styles()", () => {
    const { styles } = defineConfig({});

    const styleStr = styles({
      backgroundColor: "red.500",
      fontSize: "12px",
    });

    expect(styleStr).toBe("background-color: #FA0054; font-size: 12px;");
  });

  test("should handle null or undefined values by omitting them", () => {
    const { css } = defineConfig({});

    const styleObj = css({
      backgroundColor: "red.500",
      color: undefined,
      margin: null,
    }) as any;

    expect(styleObj).toEqual({
      backgroundColor: "#FA0054",
    });
  });
});
