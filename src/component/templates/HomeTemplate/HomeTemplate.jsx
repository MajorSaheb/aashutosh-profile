import React, { useState } from "react";
import Home from "../../organisms/Home";
import styles from "./home-template.module.scss";
import { useDarkMode } from "../../../customHooks/useDarkMode";

const HomeTemplate = () => {
  const isDarkTheme = useDarkMode()

  return (
    <div
      className={isDarkTheme ? styles.container__dark : styles.container__light}
    >
      <Home />
    </div>
  );
};

export default HomeTemplate;
