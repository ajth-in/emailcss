import type { Recursive } from "../utils";
import type { Token } from "./token";
import type { CompositionStyleObject } from "./style";

export type AnimationStyleProperty =
  | "animation"
  | "animationComposition"
  | "animationDelay"
  | "animationDirection"
  | "animationDuration"
  | "animationFillMode"
  | "animationIterationCount"
  | "animationName"
  | "animationPlayState"
  | "animationTimingFunction"
  | "animationRange"
  | "animationRangeStart"
  | "animationRangeEnd"
  | "animationTimeline"
  | "transformOrigin";

export type AnimationStyle = CompositionStyleObject<AnimationStyleProperty>;
export type AnimationStyles = Recursive<Token<AnimationStyle>>;
