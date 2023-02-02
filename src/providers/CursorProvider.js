import { createContext, useState } from "react";
import { Cursor } from "../components/Cursor";

export const CursorContext = createContext({
  cursorVariant: "default",
  setCursorVariant: () => {},
});

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const value = { cursorVariant, setCursorVariant };

  return (
    <CursorContext.Provider value={value}>
      <Cursor variant={cursorVariant} />
      {children}
    </CursorContext.Provider>
  );
};
