import { useEffect, useState } from "react";
import { debounce } from "@utils/throttle-debounce";

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

  return [rect.width, rect.height];
};

export default useBoard;
