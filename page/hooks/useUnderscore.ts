import { useRef, useEffect } from "react";

export const useDebounce = (fn: () => void, ms = 30, deps = []): (() => void)[] => {
  const timer = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setTimeout(() => {
      fn();
    }, ms);
  }, deps);

  const cancel = () => {
    clearTimeout(timer.current);
    timer.current = null;
  };

  return [cancel];
};

export const useThrottle = () => {};
