import React, { createContext, ReactNode, useState } from "react";

import { Cursor } from "../components/Cursor";

type Props = {
  children: ReactNode;
};

export type CursorVarientOptions = "default" | "pointer";

type CursorContextType = {
  cursorVariant: CursorVarientOptions;
  setCursorVariant: React.Dispatch<React.SetStateAction<CursorVarientOptions>>;
};

export const CursorContext = createContext<CursorContextType>({
  cursorVariant: "default",
  setCursorVariant: () => {},
});

export const CursorProvider = ({ children }: Props) => {
  const [cursorVariant, setCursorVariant] =
    useState<CursorVarientOptions>("default");
  const value = { cursorVariant, setCursorVariant };

  return (
    <CursorContext.Provider value={value}>
      <Cursor />
      {children}
    </CursorContext.Provider>
  );
};
