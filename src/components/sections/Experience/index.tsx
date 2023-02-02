import React from "react";
import { useContext } from "react";

import { CursorContext } from "../../../providers/CursorProvider";

import evenLogo from "./companies/even.png";
import gwcLogo from "./companies/gwc.png";
import indicativeLogo from "./companies/indicative.png";
import quartetLogo from "./companies/quartet.png";
import rotationLogo from "./companies/rotation.png";

import "./index.css";

export const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <Experience
        companyName={"Even"}
        jobTitle={"Software Engineer"}
        blurb={
          "Being an engineer at Even Financial has given me the opportunity to work on both client-facing feature implementation, and also contribute to a codebase rearchitecting project in which we rethought all of the frontend code existing at Even. This gave me the opportunity to grow both in practical hands-on skills, and also expand in my knowledge and approach towards high-level concepts."
        }
        logo={evenLogo}
        years={"nov 2021 - present"}
        link="https://evenfinancial.com/"
      />

      <Experience
        companyName={"Quartet"}
        jobTitle={"Full Stack Software Developer"}
        blurb={
          "Working at Quartet, I collaborated with designers, project managers, and engineers in an agile workflow to ensure new projects were thoughtfully defined and successfully completed. And additionally, implementing changes and optimizations to improve the existing codebase."
        }
        logo={quartetLogo}
        years={"mar 2021 - sept 2021"}
        link="https://quartethealth.com"
      />

      <Experience
        companyName={"Indicative"}
        jobTitle={"Software Developer Intern"}
        blurb={
          "I was excited and empowered to make a real impact while at Indicative with a mixture of feature implementations, optimizations, and bug fixes. This included a new time zone property, which is now used in all of Indicative’s tools."
        }
        logo={indicativeLogo}
        years={"sept 2020 - jan 2021"}
        link="https://indicative.com"
      />

      <Experience
        companyName={"The Rotation"}
        jobTitle={"Full Stack Web Developer Intern"}
        blurb={
          "At The Rotation, I developed user-friendly features in React and Ruby on Rails, including Netflix-style next package queue, catalog search, and shipping workflow tools for operations employees."
        }
        logo={rotationLogo}
        years={"mar 2020 - aug 2020"}
        link="https://therotation.club"
      />

      <Experience
        companyName={"Girls Who Code"}
        jobTitle={"Teacher's Assistant"}
        blurb={
          "As a teacher’s assistant at the GWC Campus program, I had the amazing experience of guiding and supporting  a class of middle school future-engineers as they learned the basics of Arduino coding and wearable technology."
        }
        logo={gwcLogo}
        years={"summer 2019"}
        link="https://girlswhocode.com/"
      />
    </section>
  );
};

type ExperienceProps = {
  companyName: string;
  jobTitle: string;
  blurb: string;
  logo: any;
  link: string;
  years: string;
};

const Experience = ({
  companyName,
  jobTitle,
  blurb,
  logo,
  link,
  years,
}: ExperienceProps) => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <div className="experience">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        onMouseEnter={() => setCursorVariant("pointer")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <img src={logo} alt={companyName} className="company-logo" />
      </a>

      <div className="experience-info">
        <h4>{years}</h4>
        <h3 className="hover">{jobTitle}</h3>
        <p>{blurb}</p>
      </div>
    </div>
  );
};
