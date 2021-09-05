import React, { useEffect } from "react";

import { useMediaQuery } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import makeBaseTheme from "./createBaseTheme";
import { DarkModeContext } from "./DarkModeContext";

const lightPalette = {
  type: "light",
  background: {
    default: "#fff",
  },
  custom: {
    dark: "#333",
    medium: "#dbdbdb",
    light: "#f7f7f7",
    main: "#1c88bf",
    mainDark: "#364051",
    contrast: "#fff",
    textGray: "#666",
  },
};

const darkPalette = {
  type: "dark",
  custom: {
    dark: "#eee",
    medium: "#666",
    light: "#2a2a2a",
    main: "#1c88bf",
    mainDark: "#1d1d1d",
    contrast: "#fff",
    textGray: "#666",
  },
};

const AppTheme: React.FC = ({ children }) => {
  const OSPrefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [prefersDarkMode, updateDarkMode] = React.useState(OSPrefersDarkMode);

  useEffect(() => {
    updateDarkMode(OSPrefersDarkMode);
  }, [updateDarkMode, OSPrefersDarkMode]);

  const toggleTheme = React.useCallback(() => {
    updateDarkMode(!prefersDarkMode);
  }, [updateDarkMode, prefersDarkMode]);

  const theme = React.useMemo(
    () =>
      makeBaseTheme({
        palette: prefersDarkMode ? darkPalette : lightPalette,
        typography: {
          fontFamily: ["Helvetica", "Arial", "Roboto", "sans-serif"].join(","),
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkModeContext.Provider
        value={{
          prefersDarkMode,
          toggleTheme,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
};

export default AppTheme;
