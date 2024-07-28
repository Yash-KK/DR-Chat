import { CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import React, { useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import createMuiTheme from "../../theme/theme";
import ColorModeContext from "../context/DarkModeContext";

type ToggleColorModeProps = {
  children: ReactNode;
};
const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<"light" | "dark">(() => {
    const savedMode = localStorage.getItem("colorMode") as
      | "light"
      | "dark"
      | null;
    return savedMode || (prefersDarkMode ? "dark" : "light");
  });

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode,
    }),
    [toggleColorMode]
  );

  const theme = createMuiTheme(mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
