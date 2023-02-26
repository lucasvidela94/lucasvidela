import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { ContextInitialState } from "./ThemeContext";
import { themeReducer } from "./ThemeReducer";

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, ContextInitialState);

  const setWinterMode = () => {
    dispatch({ type: "SET_WINTER_MODE" });
  };

  const setSummerMode = () => {
    dispatch({ type: "SET_SUMMER_MODE" });
  };

  const value = {
    theme: state.themes[state.currentTheme],
    setWinterMode,
    setSummerMode,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
