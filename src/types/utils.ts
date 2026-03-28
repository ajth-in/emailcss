export interface Recursive<T> {
  [key: string]: T | Recursive<T>;
}
