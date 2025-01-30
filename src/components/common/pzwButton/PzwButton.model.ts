import { FunctionalComponent } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export type ButtonDensity = 'default' | 'comfortable' | 'compact';
export type ButtonPosition =
  | 'static'
  | 'relative'
  | 'fixed'
  | 'absolute'
  | 'sticky';
export type ButtonVariant =
  | 'flat'
  | 'text'
  | 'elevated'
  | 'tonal'
  | 'outlined'
  | 'plain';

export type PzwButtonProps = {
  active?: boolean;
  activeColor?: string;
  appendIcon?:
    | string
    | (string | [string, number])[]
    | (new () => any)
    | FunctionalComponent;
  baseColor?: string;
  block?: boolean;
  border?: boolean | string | number;
  color?: string;
  density?: ButtonDensity;
  disabled?: boolean;
  elevation?: string | number;
  exact?: boolean;
  flat?: boolean;
  height?: string | number;
  href?: string;
  icon?: string;
  loading?: boolean;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  position?: ButtonPosition;
  prependIcon?:
    | string
    | (string | [string, number])[]
    | (new () => any)
    | FunctionalComponent;
  readonly?: boolean;
  replace?: boolean;
  ripple?: boolean;
  rounded?: boolean | string | number;
  selectedClass?: string;
  size?: string | number;
  slim?: boolean;
  stacked?: boolean;
  symbol?: any;
  tag?: string;
  text?: string;
  theme?: string;
  tile?: boolean;
  to?: RouteLocationRaw;
  value?: any;
  variant?: ButtonVariant;
  width?: string | number;
};
