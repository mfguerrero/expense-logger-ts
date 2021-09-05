import React from 'react';

export const DarkModeContext = React.createContext({
  prefersDarkMode: true,
  toggleTheme: () => {},
});
