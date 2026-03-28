import type { CssKeyframes } from "./style";
import type { Tokens, SemanticTokens } from "./data";
import type { TextStyles } from "./text";

export interface Theme {
  /**
   * The css animation keyframes definitions.
   */
  keyframes?: CssKeyframes;
  /**
   * The design tokens for your project.
   */
  tokens?: Tokens;
  /**
   * The semantic design tokens for your project.
   */
  semanticTokens?: SemanticTokens;
  /**
   * The typography styles for your project.
   */
  textStyles?: TextStyles;
}
