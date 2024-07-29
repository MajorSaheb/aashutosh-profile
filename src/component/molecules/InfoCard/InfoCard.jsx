import React from "react";
import Link from "next/link";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import styles from "./info-card.module.scss";

const content = {
  greeting: "HI THERE 👋 , I'M",
  name: "Aashutosh Prakash",
  developer: "DEVELOPER",
  devEmoji: "👨‍💻",
  gameEmoji: "🎮",
  // description: "I'm an experienced UI Developer and a cloud enthusiast.",
  description:
    "I’m specialized in Front-End Transformation, with a passion for Cloud Technologies.",
  buttonContent: "Let's Connect",
  note: "NOTE: Site support device dark mode."
};

const InfoCard = () => {
  const handleConnect = () => {
    window.location.href = "https://www.linkedin.com/in/aashutoshprakash/";
  };
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
      <Button
        content={content.buttonContent}
        type="button"
        handler={handleConnect}
      />
      <p className={styles.infoCard__note}>{content.note}</p>
    </>
  );
};

export default InfoCard;
