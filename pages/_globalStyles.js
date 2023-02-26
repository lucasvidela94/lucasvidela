import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <style>{`
  :root{
    --primary-color:${colors.primary_color}
    --secondary-color:${colors.secondary_color}
    --third-color:${colors.third_color}
    --forth-color:${colors.forth_color}

    body {
        background-color: var(--primary-color);
        color: var(--secondary-color);
      }

      
  }
  `}</style>
  );
};

export default GlobalStyles;
