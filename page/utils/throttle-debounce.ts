export const debounce = <T>(fn: () => void, delay = 60): ((...arg: T[]) => void) => {
  let timer = null;

  return function (...args: T[]) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};
