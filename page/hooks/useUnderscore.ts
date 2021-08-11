import { useRef, useEffect, useState } from "react";

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

export const useThrottle = (fn: () => void, ms = 30, deps: unknown[] = []): (() => void)[] => {
  const previous = useRef(0);
  const [time, setTime] = useState(ms);
  useEffect(() => {
    const now = Date.now();
    if (now - previous.current > time) {
      fn();
      previous.current = Date.now();
    }
  }, deps);

  const cancel = () => {
    setTime(0);
  };

  return [cancel];
};
