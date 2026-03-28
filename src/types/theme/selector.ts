export type AriaAttributes =
  | "[aria-disabled]"
  | "[aria-hidden]"
  | "[aria-invalid]"
  | "[aria-readonly]"
  | "[aria-required]"
  | "[aria-selected]"
  | "[aria-checked]"
  | "[aria-expanded]"
  | "[aria-pressed]";
export type DataAttributes =
  | "[data-selected]"
  | "[data-highlighted]"
  | "[data-hover]"
  | "[data-active]"
  | "[data-checked]"
  | "[data-disabled]"
  | "[data-readonly]"
  | "[data-focus]"
  | "[data-focus-visible]"
  | "[data-focus-visible-added]"
  | "[data-invalid]"
  | "[data-pressed]"
  | "[data-expanded]"
  | "[data-grabbed]"
  | "[data-dragged]"
  | "[data-orientation=horizontal]"
  | "[data-orientation=vertical]"
  | "[data-in-range]"
  | "[data-out-of-range]"
  | "[data-placeholder-shown]"
  | `[data-part=${string}]`
  | `[data-attr=${string}]`
  | `[data-placement=${string}]`
  | `[data-theme=${string}]`
  | `[data-size=${string}]`
  | `[data-state=${string}]`
  | "[data-empty]"
  | "[data-loading]"
  | "[data-loaded]"
  | "[data-enter]"
  | "[data-entering]"
  | "[data-exited]"
  | "[data-exiting]";

export type AnySelector = `${string}&` | `&${string}` | `@${string}`;
export type Selectors = string;
