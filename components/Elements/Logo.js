/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo_test from "../../public/assets/harry-potter.png";
import styles from "../../styles/components/logo.module.scss";
import Image from "next/image";

const PortfolioLogo = ({ className }) => {
  return (
    <div className={styles["portfolio-logo-container"]}>
      <Image
        src={logo_test}
        className={styles["logo-from-portfolio"]}
        alt="portfolio-logo"
      />
    </div>
  );
};

export default PortfolioLogo;
