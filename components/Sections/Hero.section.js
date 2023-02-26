import React from "react";
import styles from "../../styles/sections/hero.module.scss";
import { useContext } from "react";
import { summerMode, ThemeContext } from "../../context/theme/ThemeContext";

const HeroSection = () => {
  const { setSummerMode } = useContext(ThemeContext);

  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Titulo random</h1>
      <button onClick={() => setSummerMode()}>Cambiar</button>
    </div>
  );
};

export default HeroSection;
