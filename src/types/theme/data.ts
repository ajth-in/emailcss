import type { Recursive } from "../utils";
import type { Token, SemanticToken, Shadow, Border, Gradient, Asset } from "./token";

export interface TokenDataTypes {
  cursor: string;
  zIndex: string | number;
  opacity: string | number;
  colors: string;
  fonts: string | string[];
  fontSizes: string;
  fontWeights: string | number;
  lineHeights: string | number;
  letterSpacings: string;
  sizes: string;
  shadows: Shadow | Shadow[] | string | string[];
  spacing: string | number;
  radii: string;
  borders: string | Border;
  durations: string;
  easings: string | number[];
  animations: string;
  blurs: string;
  gradients: string | Gradient;
  assets: string | Asset;
  borderWidths: string;
  aspectRatios: string;
  containerNames: string;
}

export type Tokens = {
  [key in keyof TokenDataTypes]?: Recursive<Token<TokenDataTypes[key]>>;
};

export type SemanticTokens<ConditionKey extends string = string> = {
  [key in keyof TokenDataTypes]?: Recursive<SemanticToken<TokenDataTypes[key], ConditionKey>>;
};
