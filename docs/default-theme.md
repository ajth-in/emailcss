# Default Theme

MailCSS provides a comprehensive and rich default theme out of the box, located in `src/css/default-theme.ts`. This allows you to construct beautiful and consistent emails immediately without defining every basic design token from scratch.

The structure and provided scales are heavily inspired by popular utility-first CSS frameworks like Tailwind CSS.

## Categories Overview

The default theme populates several core tokens with literal string or numeric values guaranteed to parse well across email clients (e.g., specific `#hex` colors or string sizes like `px`).

### Colors

A massive array of color palettes with nuanced weighting from `50` (lightest) to `950` (darkest). Supported color ranges include:

- Core colors: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`
- Neutrals / Grays: `slate`, `gray`, `zinc`, `neutral`, `stone`, `mauve`, `olive`, `mist`, `taupe`
- Standard: `black`, `white`

### Spacing & Layout

- **`spacing`**: A granular numeric scale mappings (such as `0.5`, `1`, `1.5`, up to `96`) represented correctly in `px`. Using pixels ensures the highest compatibility for structural widths/padding with email clients compared to `rem` formats.
- **`sizes`**: Includes predefined named sizes like `breakpoint-*`, `container-*`, and `perspective-*`.

### Typography

- **`fontSizes`**: T-shirt sizes cleanly mapped (`xs` at `12px` through `9xl` up to `128px`).
- **`fontWeights`**: Textual aliases linked directly to explicit hundred-step values (`thin` to `black`).
- **`letterSpacings`**: Scaling tracking adjustments (`tighter` through `widest`).
- **`lineHeights`**: Typical safe ratios (`tight`, `snug`, `normal`, `relaxed`, `loose`).

### Effects

- **`radii`**: Standard box-corner rounding mapped to `px` (`xs` to `4xl`).
- **`shadows`**: Configured definitions for default shadows, inner shadows, and inset styles (`shadow-md`, `drop-shadow-lg`, etc.).
- **`blurs`**: Explicit pixel boundaries for backdrop blur configurations.
- **`easings`**: Common transitions (`in`, `out`, `in-out`).
- **`aspectRatios`**: Supports ratios mapping like `video` mapped to `16 / 9`.

## Understanding the Internal Structure

Internally, the `defaultTheme` object is strongly typed to the framework's internal `Theme` interface, assuring autocompletion in your configuration:

```typescript
// Typical extract from src/css/default-theme.ts
export const defaultTheme = {
  tokens: {
    colors: {
      slate: {
        "50": { value: "#F8FBF2" },
        "500": { value: "#618581" },
      },
    },
    fontSizes: {
      base: { value: "16px" },
    },
  },
} satisfies Theme;
```

## Going Further

The default theme is intended as a universally predictable starting point. You can choose to overwrite segments of it or map **Semantic Tokens** against it. Check out the [Theming Guide](./theming.md) to explore how these tokens resolve inline!
