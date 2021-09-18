import React from "react";
import Link from "next/link";
import styles from "./back-button.module.scss";

const BackButton = () => {
  return (
    <Link href="/">
      <button aria-label="navigate to home" className={styles.back_button}>
        <img src="/left-chevron.png" alt="" />
      </button>
    </Link>
  );
};

export default BackButton;
