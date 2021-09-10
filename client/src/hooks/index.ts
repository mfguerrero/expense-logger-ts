import { useCallback, useEffect, useRef } from "react";

export function useTimeout(callback: any, delay: number) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export function useDebounce(callback: any, delay: number, dependencies: any[]) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);

  //eslint-disable-next-line
  useEffect(clear, []);
}
