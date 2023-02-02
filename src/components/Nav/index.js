import logo from "./assets/logo.png";

import resumePDF from "./assets/resume.pdf";

import linkedin from "./assets/icons/linkedin.svg";
import github from "./assets/icons/github.svg";
import resume from "./assets/icons/resume.svg";
import email from "./assets/icons/email.svg";

import { CursorLink } from "./CursorLink";

import "./index.css";

export const Nav = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

const DesktopNav = () => (
  <nav className="desktop-view">
    <CursorLink href={"https://www.linkedin.com/in/michelle-berger-46aa5818b"}>
      <img src={linkedin} alt="linkedin" height="40px" />
    </CursorLink>

    <CursorLink href={"https://github.com/bergerm613"}>
      <img src={github} alt="github" height="40px" />
    </CursorLink>

    <img
      src={logo}
      alt="Michelle Berger - software developer"
      className="title"
    />

    <CursorLink href={resumePDF}>
      <img src={resume} alt="resume" height="40px" />
    </CursorLink>

    <CursorLink
      href={"mailto: bergerm613@gmail.com?subject=Hey, loved your website!"}
    >
      <img src={email} alt="email" height="40px" />
    </CursorLink>
  </nav>
);

const MobileNav = () => (
  <nav className="mobile-view">
    <img
      src={logo}
      alt="Michelle Berger - software developer"
      className="title"
    />
    <div className="mobile-icons">
      <a
        href="https://www.linkedin.com/in/michelle-berger-46aa5818b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin" height="40px" />
      </a>

      <a
        href="https://github.com/bergerm613"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" height="40px" />
      </a>

      <a href={resumePDF} target="_blank" rel="noopener noreferrer">
        <img src={resume} alt="resume" height="40px" />
      </a>

      <a
        href="mailto: bergerm613@gmail.com?subject=Hey, loved your website!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={email} alt="email" height="40px" />
      </a>
    </div>
  </nav>
);
