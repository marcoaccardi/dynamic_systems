import React, { useState, useEffect, useMemo, createContext } from "react";
import { throttle } from "lodash";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = throttle((e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      }, 60);
      window.addEventListener("mousemove", move);
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  }, []);

  const cursorVariants = useMemo(
    () => ({
      default: {
        x: cursorPos.x - 16,
        y: cursorPos.y - 16,
        backgroundColor: "#0e1112",
      },
      text: {
        width: "100px",
        height: "100px",
        x: cursorPos.x - 72,
        y: cursorPos.y - 72,
        backgroundColor: "#fff",
        mixBlendMode: "difference",
      },
      none: {
        width: 0,
        height: 0,
        backgroundColor: "rgba(255,255,255, 1)",
      },
    }),
    [cursorPos]
  );
  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  const memoizedValue = useMemo(
    () => ({
      cursorVariants,
      cursorBG,
      mouseEnterHandler,
      mouseLeaveHandler,
    }),
    [cursorVariants, cursorBG]
  );

  return (
    <CursorContext.Provider value={memoizedValue}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
