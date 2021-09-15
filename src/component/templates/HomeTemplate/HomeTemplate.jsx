import React, { useState } from "react";
import Home from "../../organisms/Home";
import styles from "./home-template.module.scss";

const HomeTemplate = () => {
  const [isDarkTheme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setTheme(e.matches);
    });

  return (
    <div
      className={isDarkTheme ? styles.container__dark : styles.container__light}
    >
      <Home />
    </div>
  );
};

export default HomeTemplate;
