import React, { createContext, useContext } from 'react';

// Custom Theme Context to override the default ThemeContext
const NoThemeContext = createContext({
  theme: 'default', // You can set your default theme value here
});

const useNoTheme = () => useContext(NoThemeContext);

export { NoThemeContext, useNoTheme };
