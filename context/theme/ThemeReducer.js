import { winterMode, summerMode } from "./ThemeContext";

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_WINTER_MODE":
      return {
        ...state,
        currentTheme: "winter",
        theme: {
          name: winterMode.name,
          colors: { ...winterMode.colors },
        },
      };
    case "SET_SUMMER_MODE":
      return {
        ...state,
        currentTheme: "summer",
        theme: {
          name: summerMode.name,
          colors: { ...summerMode.colors },
        },
      };
    default:
      return state;
  }
};
