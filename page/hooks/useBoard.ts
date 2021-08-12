import { useEffect, useState } from "react";

const debounce = (fn: (...arges: unknown[]) => void, delay = 60) => {
  let timer = null;
  return function (...args: unknown[]) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};

const useBoard = (): number[] => {
  const [rect, setRect] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = debounce(() => {
      setRect({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  console.log("this is width::%d, this is height::%d", rect.width, rect.height);

  return [rect.width, rect.height];
};

export default useBoard;
