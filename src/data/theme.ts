export type Theme = {
  name: string;
  colors: ThemeColors;
};

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
};

export const themes: Theme[] = [
  {
    name: "Comfort Blue",
    colors: {
      primary: "#058ED9",
      secondary: "#483D3F",
      accent: "#06A77D",
      background: "#FFFFFF",
      surface: "#F4EBD9",
      text: "#000",
      muted: "#A39A92",
      border: "#D1D5DB",
    },
  },
  {
    name: "Forest",
    colors: {
      primary: "#2F6B3A",
      secondary: "#A16207",
      accent: "#7C3AED",
      background: "#F7F9F4",
      surface: "#FFFFFF",
      text: "#1F2937",
      muted: "#6B7280",
      border: "#D6D3D1",
    },
  },
  {
    name: "Sunset",
    colors: {
      primary: "#B91C1C",
      secondary: "#EA580C",
      accent: "#DB2777",
      background: "#FFF7ED",
      surface: "#FFFFFF",
      text: "#1F2937",
      muted: "#78716C",
      border: "#FED7AA",
    },
  },
]



