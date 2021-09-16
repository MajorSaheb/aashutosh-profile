import React from "react";
import styles from "./button.module.scss";

const Button = ({ content, type, handler, variant = "primary" }) => {
  return (
    <button className={styles[variant]} type={type} onClick={handler}>
      {content}
    </button>
  );
};

export default Button;
