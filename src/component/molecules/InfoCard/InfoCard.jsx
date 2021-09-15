import React from "react";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import styles from "./info-card.module.scss";

const content = {
  greeting: "HI THERE 👋 , I'M",
  name: "Aashutosh Prakash",
  developer: "DEVELOPER 👨‍💻",
  description: "I'm a experienced UI Developer and a cloud enthusiast.",
  buttonContent: "Let's Connect",
};

const InfoCard = () => {
  const handleConnect = () => {
    window.location.href = "https://www.linkedin.com/in/aashutoshprakash/";
  };
  return (
    <>
      <p>{content.greeting}</p>
      <Heading content={content.name} Type="h1" />
      <p className={styles.infoCard__role}>{content.developer}</p>
      <p className={styles.infoCard__description}>{content.description}</p>
      <Button
        content={content.buttonContent}
        type="button"
        handler={handleConnect}
      />
    </>
  );
};

export default InfoCard;
