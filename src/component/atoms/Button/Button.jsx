import React from "react";
import styles from "./button.module.scss";

const Button = ({ content, type, handler }) => {
  return (
    <button className={styles.button} type={type} onClick={handler}>
      {content}
    </button>
  );
};

export default Button;
