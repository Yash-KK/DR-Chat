import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    primaryAppBar: {
      height: number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    primaryAppBar?: {
      height?: number;
    };
  }
}

const createMuiTheme = () => {
  const theme = createTheme({
    primaryAppBar: {
      height: 50,
    },

    components: {
      MuiAppBar: {
        defaultProps: {
          color: "default",
          elevation: 0,
        },
      },
    },
  });
  return theme;
};

export default createMuiTheme;
