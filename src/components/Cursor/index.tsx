import React, { useState, useEffect, useContext } from "react";
import { motion, Variants } from "framer-motion";

import { CursorContext } from "../../providers/CursorProvider";

import "./index.css";

export const Cursor = () => {
  const { cursorVariant } = useContext(CursorContext);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    pointer: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#faa275",
      mixBlendMode: "hard-light",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
  );
};
