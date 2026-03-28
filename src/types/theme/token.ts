export interface Token<Value = any> {
  value: Value;
  description?: string;
  type?: string;
  deprecated?: boolean | string;
  extensions?: {
    [key: string]: any;
  };
}

export type RecursiveToken<C extends string, V> =
  | V
  | {
      [K in C]: RecursiveToken<C, V>;
    };

export interface SemanticToken<Value = string, Condition extends string = string> extends Token<
  RecursiveToken<Condition, Value>
> {}

export interface Shadow {
  offsetX: number | string;
  offsetY: number | string;
  blur: number | string;
  spread: number | string;
  color: string;
  inset?: boolean;
}

export interface Gradient {
  type: "linear" | "radial";
  placement: string | number;
  stops:
    | Array<{
        color: string;
        position: number;
      }>
    | Array<string>;
}

export interface Asset {
  type: "url" | "svg";
  value: string;
}

export interface Border {
  color: string;
  width: string | number;
  style:
    | "dashed"
    | "dotted"
    | "double"
    | "groove"
    | "hidden"
    | "inset"
    | "none"
    | "outset"
    | "ridge"
    | "solid";
}
