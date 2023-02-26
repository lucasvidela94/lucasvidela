import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";
import { ThemeProvider } from "../context/theme/ThemeProvider";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // :root {
  //   --primary-color: ${(props) => props.theme.colors.primary_color};
  //   --secondary-color: ${(props) => props.theme.colors.secondary_color};
  //   --third-color: ${(props) => props.theme.colors.third_color};
  //   --forth-color: ${(props) => props.theme.colors.forth_color};
  // }

  body {
    background-color: ${(props) => props.theme.colors.primary_color};
    color: ${(props) => props.theme.colors.secondary_color};
  }
`;

function MyApp({ Component, pageProps }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <GlobalStyles theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
