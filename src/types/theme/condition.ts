export type ConditionQuery = string | string[];

export interface Conditions {
  [condition: string]: ConditionQuery;
}

export type Condition = string;

export type ConditionalValue<V> =
  | V
  | Array<V | null>
  | {
      [K in keyof Conditions]?: ConditionalValue<V>;
    };
