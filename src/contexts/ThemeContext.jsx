// src/contexts/ThemeContext.jsx
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const ThemeContext = createContext();

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }

// export function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(() => {
//     // Check localStorage first, then system preference
//     const saved = localStorage.getItem('theme');
//     if (saved) {
//       return saved === 'dark';
//     }
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   useEffect(() => {
//     // Apply the theme class to the document element
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(prev => !prev);
//   };

//   const value = {
//     isDark,
//     toggleTheme
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }















// // src/contexts/ThemeContext.jsx
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const ThemeContext = createContext();

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }

// export function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(() => {
//     // Check if user has explicitly set a theme preference
//     const savedTheme = localStorage.getItem('minimart-theme');
    
//     if (savedTheme) {
//       return savedTheme === 'dark';
//     }
    
//     // If no saved preference, default to light mode
//     // (comment out the system preference check to avoid using system default)
//     return false;
    
//     // If you want to use system preference as fallback, use this instead:
//     // return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   useEffect(() => {
//     // Apply the theme class to the document element
//     const root = document.documentElement;
    
//     if (isDark) {
//       root.classList.add('dark');
//       localStorage.setItem('minimart-theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('minimart-theme', 'light');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(prev => !prev);
//   };

//   const setTheme = (theme) => {
//     setIsDark(theme === 'dark');
//   };

//   const value = {
//     isDark,
//     toggleTheme,
//     setTheme
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }


import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
