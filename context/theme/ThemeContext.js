import { createContext } from "react";

export const winterMode = {
  name: "winter",
  colors: {
    primary_color: "#439A97",
    secondary_color: "#62B6B7",
    third_color: "#97DECE",
    forth_color: "#CBEDD5",
  },
};

export const summerMode = {
  name: "summer",
  colors: {
    primary_color: "#FFEA20",
    secondary_color: "#8DCBE6",
    third_color: "#9DF1DF",
    forth_color: "#E3F6FF",
  },
};

export const ContextInitialState = {
  themes: {
    winter: {
      name: winterMode.name,
      colors: {
        primary_color: winterMode.colors.primary_color,
        secondary_color: winterMode.colors.secondary_color,
        third_color: winterMode.colors.third_color,
        forth_color: winterMode.colors.forth_color,
      },
    },
    summer: {
      name: summerMode.name,
      colors: {
        primary_color: summerMode.colors.primary_color,
        secondary_color: summerMode.colors.secondary_color,
        third_color: summerMode.colors.third_color,
        forth_color: summerMode.colors.forth_color,
      },
    },
  },
  currentTheme: "winter",
};

export const ThemeContext = createContext(ContextInitialState);
