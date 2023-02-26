import {
  Header,
  About,
  Projects,
  Footer,
  Skills,
  ButtonToTop,
  HeroSection,
} from "../components";
import { useState, useEffect } from "react";
import PortfolioLogo from "../components/Elements/Logo";
import styles from "../styles/components/home.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

const Home = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const waitingAnimation = setTimeout(() => {
      setContentLoaded(true);
      setShowLogo(false);
    }, 4000);

    return () => {
      clearTimeout(waitingAnimation);
    };
  }, []);

  const ContentPage = () => {
    return (
      <div
        className={`${styles.contentPage} ${contentLoaded && styles.loaded}`}
      >
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
        <ButtonToTop />
      </div>
    );
  };

  const NewContentPage = () => {
    return (
      <div>
        <HeroSection />
      </div>
    );
  };

  return (
    <div className={styles.contentWrapper}>
      <div
        className={`${styles["portfolio-logo-wrapper"]} ${
          showLogo ? "" : styles["logo-hidden"]
        }`}
      >
        <PortfolioLogo />
      </div>
      {contentLoaded && (
        <div className={`${styles["contentpage-wrapper"]}`}>
          <NewContentPage />
        </div>
      )}
    </div>
  );
};

export default Home;
