import React from "react";
import Link from "next/link";
import Heading from "../../atoms/Heading";
import LinkedInIcon from "../../atoms/icons/LinkedInIcon";
import XIcon from "../../atoms/icons/XIcon";
import GitHubIcon from "../../atoms/icons/GitHubIcon";
import styles from "./info-card.module.scss";

const content = {
  greeting: "HI THERE 👋 , I'M",
  name: "Aashutosh Prakash",
  developer: "DEVELOPER",
  devEmoji: "👨‍💻",
  gameEmoji: "🎮",
  description:
    "AI Engineer with 10+ years of experience architecting scalable FinTech platforms at Paytm. Specialized in Frontend Engineering, with a passion for Cloud Technologies and AI-powered product development.",
  projectsTitle: "PROJECTS",
  projects: [
    {
      name: "Paytm",
      url: "https://paytm.com/recharge",
      description:
        "Led engineering for Paytm, powering 10M+ transactions daily. Maintained sub-2s p95 page loads, improved performance and conversion, accelerated delivery through DX tooling, and automated monitoring and incident response at scale.",
    },
    {
      name: "Evenkar",
      url: "https://evenkar.vercel.app",
      description: "Offline, private expense splitter for trips & groups.",
    },
    {
      name: "claude-atone",
      url: "https://github.com/aashutosh-prakash/claude-atone",
      description: "A Claude Code hook that does penance squats when the AI slips up.",
    },
    {
      name: "claude-nudge",
      url: "https://github.com/aashutosh-prakash/claude-nudge",
      description: "macOS notification hook that pings you when Claude Code needs input.",
    },
    {
      name: "react-live-region",
      url: "https://www.npmjs.com/package/react-live-region",
      description: "Tiny React component for screen-reader live announcements.",
    },
  ],
  linkedIn: "https://www.linkedin.com/in/aashutoshprakash/",
  x: "https://x.com/Aashutosh_94",
  github: "https://github.com/aashutosh-prakash",
  note: "Adapts to your device's light & dark theme.",
};

const InfoCard = () => {
  return (
    <>
      <p>{content.greeting}</p>
      <Heading content={content.name} Type="h1" />
      <Link href="/game" className={styles.infoCard__link}>
        {content.developer}
      </Link>
      &nbsp;
      {content.gameEmoji}
      {content.devEmoji}
      <p className={styles.infoCard__description}>{content.description}</p>
      <section className={styles.infoCard__projects} aria-label="Projects">
        <p className={styles.infoCard__projectsTitle}>{content.projectsTitle}</p>
        <ul className={styles.infoCard__projectsList}>
          {content.projects.map((project) => (
            <li key={project.name} className={styles.infoCard__projectsItem}>
              <a
                className={styles.infoCard__projectsLink}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              <span className={styles.infoCard__projectsDesc}>
                {" "}
                — {project.description}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.infoCard__socials}>
        <a
          className={styles.infoCard__linkedin}
          href={content.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          className={styles.infoCard__x}
          href={content.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find me on X"
        >
          <XIcon />
        </a>
        <a
          className={styles.infoCard__github}
          href={content.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See my code on GitHub"
        >
          <GitHubIcon />
        </a>
      </div>
      <p className={styles.infoCard__note}>{content.note}</p>
    </>
  );
};

export default InfoCard;
