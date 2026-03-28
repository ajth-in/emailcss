import type { Selectors, AnySelector } from "./selector";
import type { Condition, ConditionalValue } from "./condition";

export type Nested<P> =
  | (P & {
      [K in Selectors]?: Nested<P>;
    } & {
      [K in AnySelector]?: Nested<P>;
    })
  | {
      [K in Condition]?: Nested<P>;
    };

export type CssProperties = Record<string, any>;

export interface CssKeyframes {
  [name: string]: {
    [time: string]: CssProperties;
  };
}

export type CssVarProperties = {
  [key in `--${string}`]?: ConditionalValue<string | number>;
};

export type SystemStyleObject = Nested<Record<string, any> & CssVarProperties>;

export type CompositionStyleObject<Property extends string> = Nested<
  { [K in Property]?: any } & CssVarProperties
>;
