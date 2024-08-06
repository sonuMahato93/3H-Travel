// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MTThemeProvider } from '@material-tailwind/react';
import { baseTheme } from './baseTheme';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };
  const selectedTheme = theme === 'dark' ? '' : baseTheme;
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <MTThemeProvider value={selectedTheme}>{children}</MTThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
