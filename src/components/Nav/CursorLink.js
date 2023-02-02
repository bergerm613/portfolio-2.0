import { useContext } from "react";
import { CursorContext } from "../../providers/CursorProvider";

export const CursorLink = ({ href, children }) => {
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
