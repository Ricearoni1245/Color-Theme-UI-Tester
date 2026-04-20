import { themes } from "./data/theme.ts";
import type { Theme, ThemeColors } from "./data/theme.ts";
import { useState, type JSX } from "react";
import "./App.css";

function App() {

  const initialValue = 0;
 
  
  const [currentThemeIndex, setCurrentThemeIndex] = useState(initialValue);

  function previousTheme() {
    let index = currentThemeIndex
    if (currentThemeIndex === 0) {
      let lastThemeIndex = themes.length - 1;
      index = lastThemeIndex
      setCurrentThemeIndex(index);
    } else {
      index--
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
      index++
      setCurrentThemeIndex(index);
    }

    
  }

  const currentTheme = themes[currentThemeIndex];

  
  const currentThemeName: string = currentTheme.name;

  function themeList() {

    
    const textColorClasses: Record<keyof ThemeColors, string> = {
      'primary': 'text-primary',
      'secondary': 'text-secondary',
      'accent': 'text-accent',
      'background': 'text-background',
      'surface': 'text-surface',
      'text': 'text-text',
      'muted': 'text-muted',
      'border': 'text-border'
      
    }

    const ColorClasses: Record<keyof ThemeColors, string> = {
      'primary': 'bg-primary',
      'secondary': 'bg-secondary',
      'accent': 'bg-accent',
      'background': 'bg-background',
      'surface': 'bg-surface',
      'text': 'bg-text',
      'muted': 'bg-muted',
      'border': 'bg-border'
      
    }
    return (
      <li>
        {currentThemeName}
        <ul>
          {Object.entries(currentTheme.colors).map(([colorName, colorValue]) => {
            const typedColorName = colorName as keyof ThemeColors;
            const textClass = textColorClasses[typedColorName];

            return (
              <div className='flex justify-center items-center w-sm'>

                
              
              <li className={textClass}>
                {colorName}: {colorValue}
                <div></div>
                </li>
              </div>
            );
          })}
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
      <div className="flex-auto">
        <button
          onClick={previousTheme}
        
        >
          Previous
        </button>

        <h1>{currentThemeName}</h1>

        <button
          onClick={nextTheme}
        >
          Next
        </button>
      </div>

      <h2 className="text-primary">Current Theme List:</h2>
      <ul>{themeList()}</ul>

    </div>
  );

};


export default App;
