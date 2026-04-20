import { themes } from "./data/theme.ts";
import type { Theme, ThemeColors } from "./data/theme.ts";
import { useState, type JSX } from "react";
import "./App.css";

function App() {
  const initialValue = 0;

  const [currentThemeIndex, setCurrentThemeIndex] = useState(initialValue);

  function previousTheme() {
    let index = currentThemeIndex;
    if (currentThemeIndex === 0) {
      let lastThemeIndex = themes.length - 1;
      index = lastThemeIndex;
      setCurrentThemeIndex(index);
    } else {
      index--;
      setCurrentThemeIndex(index);
    }
  }

  function nextTheme() {
    let index = currentThemeIndex;
    let lastThemeIndex = themes.length - 1;
    if (index === lastThemeIndex) {
      index = 0;
      setCurrentThemeIndex(index);
    } else {
      index++;
      setCurrentThemeIndex(index);
    }
  }

  const currentTheme = themes[currentThemeIndex];

  const currentThemeName: string = currentTheme.name;

  function themeList() {
    const textColorClasses: Record<keyof ThemeColors, string> = {
      primary: "text-primary w-i ",
      secondary: "text-secondary",
      accent: "text-accent",
      background: "text-background",
      surface: "text-surface",
      text: "text-text",
      muted: "text-muted",
      border: "text-border",
    };

    const colorClasses: Record<keyof ThemeColors, string> = {
      primary: "w-full h-20 bg-primary",
      secondary: "w-full h-20  bg-secondary",
      accent: "w-full h-20  bg-accent",
      background: "w-full h-20  bg-background",
      surface: "w-full h-20  bg-surface",
      text: "w-full h-20  bg-text",
      muted: "w-full h-20  bg-muted",
      border: "w-full h-20  bg-border",
    };
    return (
      <li className='flex flex-col items-center'>
        <h2 className="text-xl mb-5">{currentThemeName}</h2>
        <ul>
          {Object.entries(currentTheme.colors).map(
            ([colorName, colorValue]) => {
              const typedColorName = colorName as keyof ThemeColors;
              const colorClass = colorClasses[typedColorName];

              return (
                <div className="flex flex-col justify-center items-center w-screen">
                  
                  <li className='w-40 flex flex-col items-center'>
                    <p className='text-black'>{colorName}: {colorValue}</p>
                    <div className={colorClass}></div>
                  </li>
                </div>
              );
            },
          )}
        </ul>
      </li>
    );
  }

  const themeVars = {
    "--color-primary": currentTheme.colors.primary,
    "--color-secondary": currentTheme.colors.secondary,
    "--color-accent": currentTheme.colors.accent,
    "--color-background": currentTheme.colors.background,
    "--color-surface": currentTheme.colors.surface,
    "--color-text": currentTheme.colors.text,
    "--color-muted": currentTheme.colors.muted,
    "--color-border": currentTheme.colors.border,
  };

  return (
    <div style={themeVars as React.CSSProperties}>
      <div className="flex flex-row w-screen justify-around mt-10">
        <button onClick={previousTheme} className='bg-accent w-fit p-5 text-white text-2xl rounded-md '>Previous</button>

        <h1>{currentThemeName}</h1>

        <button onClick={nextTheme} className='bg-accent w-fit p-5 text-white text-2xl rounded-md'>Next</button>
      </div>

      <h2 className=" my-10 text-xl text-center">Current Theme List:</h2>
      <ul className='flex flex-col justify-center items-center'>{themeList()}</ul>
    </div>
  );
}

export default App;
