import React, { useContext, PropsWithChildren } from "react";
import { CursorContext } from "../../providers/CursorProvider";

export const CursorLink = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setCursorVariant("pointer")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      {children}
    </a>
  );
};
