import React from "react";
import InfoCard from "../../molecules/InfoCard";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <InfoCard />
    </div>
  );
}
