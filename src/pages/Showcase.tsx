import { themes } from "../data/theme.ts";
import type { Theme, ThemeColors } from "../data/theme.ts";
import { useState, type JSX } from "react";
import "../App.css";

function ShowcaseTheme() {
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
      primary: "text-primary ",
      secondary: "text-secondary",
      accent: "text-accent",
      background: "text-background",
      surface: "text-surface",
      text: "text-text",
      muted: "text-muted",
      border: "text-border",
    };

    const colorClasses: Record<keyof ThemeColors, string> = {
      primary: "lg:size-50 md:size-40 size-25 border-2 border-black bg-primary ",
      secondary: "lg:size-50 md:size-40 size-25 border-2 border-black bg-secondary",
      accent: "lg:size-50 md:size-40 size-25 border-2 border-black bg-accent",
      background: "lg:size-50 md:size-40 size-25 border-2 border-black bg-background",
      surface: "lg:size-50 md:size-40 size-25 border-2 border-black bg-surface",
      text: "lg:size-50 md:size-40 size-25 border-2 border-black bg-text",
      muted: "lg:size-50 md:size-40 size-25 border-2 border-black bg-muted",
      border: "lg:size-50 md:size-40 size-25 border-2 border-black bg-border",
    };
    return (
      <div className=' mt-5 sm:mt-20 flex flex-col items-center  mx-auto'>
        <ul className="flex items-center justify-center flex-wrap lg:max-w-300 md: mx-auto gap-x-15 sm:gap-y-20 gap-y-3 mb-20 sm:mb-40">
          {Object.entries(currentTheme.colors).map(
            ([colorName, colorValue]) => {
              const typedColorName = colorName as keyof ThemeColors;
              const colorClass = colorClasses[typedColorName];
              const capitalized = colorName.charAt(0).toUpperCase() + colorName.slice(1)
              return (
              
                  
                <li className='w-fit flex flex-col items-center '>
                  <div className='flex flex-col justify-center items-center text-center'>
                    <p className=' text-(18px) font font-semi sm:text-xl text-black'>{capitalized}</p>
                    <p className='text-(18px) font-semi sm:text-xl text-black'>{colorValue}</p>
                  </div>
                    <div className={colorClass}></div>
                  </li>
                
              );
            }, 
          )}
        </ul>
      </div>
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
      <div className="  grid grid-row-2 grid-col-2 gap-4 mt-5 sm:flex flex-row w-screen h-s justify-evenly items-center  ">
        <button onClick={previousTheme} className=' font-title font-bold order-2 button text-white text-shadow-lg'>Previous</button>

        <h1 className=" font-title font-bold text-3xl sm:text-4xl order-1 col-span-2 text-center  sm:mt-0 sm:order-2" >{currentThemeName}</h1>

        <button onClick={nextTheme} className=' font-title font-bold order-3 button text-white text-shadow-lg'>Next</button>
      </div>

      <div className='flex items-center mx-auto'>{themeList()}</div>
    </div>
  );
}

export default ShowcaseTheme;
