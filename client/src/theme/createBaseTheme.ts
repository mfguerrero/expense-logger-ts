import { createTheme } from "@material-ui/core/styles";

import vhCheck from "vh-check";
import merge from "deepmerge";

const defaultOptions = {
  subtract: [],
  includeUnit: true,
};

export interface Result extends Sizes {
  unbind: UnbindFunction;
  recompute: ComputeSizeMethod;
}

export interface Sizes {
  vh: number;
  windowHeight: number;
  offset: number;
  isNeeded: boolean;
  value: number;
}

export declare type UnbindFunction = () => void;
export declare type ComputeCallback = (result?: Result) => void;
export declare type ComputeSizeMethod = () => Sizes;

export interface Configuration {
  cssVarName?: string;
  redefineVh?: boolean;
  method?: ComputeSizeMethod;
  force?: boolean;
  bind?: boolean;
  updateOnTouch?: boolean;
  onUpdate?: ComputeCallback;
}

const sum = (numbers: number[]) => {
  const reducer = (result: number, current: number) => result + current;
  return numbers.reduce(reducer, 0);
};

const verticalHeight = (v: number, options: Configuration, vhResult: Result) => {
  const normOptions = { ...defaultOptions, ...options };

  const height = vhResult.vh - vhResult.offset;
  const minsSum = sum(normOptions.subtract);
  const result = (v * height) / 100;
  const finalResult = result - minsSum;

  if (normOptions.includeUnit) {
    return `${finalResult}px`;
  }

  return finalResult;
};

const base = (overrides = {}) => {
  const vhResult = vhCheck();

  const options = {
    layout: {
      vh: (v: number, opts: any) => verticalHeight(v, opts, vhResult),
    },
  };

  const t = createTheme(overrides);
  return merge(t, options);
};

export default base;
