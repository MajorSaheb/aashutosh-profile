import React from "react";
import styles from "./button.module.scss";

const Button = ({
  content,
  type,
  handler,
  variant = "primary",
  addClasses,
}) => {
  return (
    <button
      className={`${styles[variant]} ${addClasses ? addClasses : null}`}
      type={type}
      onClick={handler}
    >
      {content}
    </button>
  );
};

export default Button;
