import React from "react";
import Link from "next/link";
import styles from "./back-button.module.scss";
import LeftChevron from "./LeftChevron";

const BackButton = ({ isDarkTheme }) => {
  return (
    <Link href="/" aria-label="navigate to home" className={styles.back_button}>
      {/* <img src="/left-chevron.png" alt="" /> */}
      <LeftChevron className={isDarkTheme ? styles.dark_theme : ""} />
    </Link>
  );
};

export default BackButton;
