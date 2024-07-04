import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    primaryAppBar: {
      height: number;
    };
    primaryDrawer: {
      width: number;
      closed: number;
    };

    secondaryDrawer: {
      width: number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    primaryAppBar?: {
      height?: number;
    };

    primaryDrawer?: {
      width?: number;
      closed?: number;
    };

    secondaryDrawer?: {
      width?: number;
    };
  }
}

const createMuiTheme = () => {
  const theme = createTheme({
    typography: {
      body1: {
        fontWeight: 500,
        letterSpacing: "-0.5px",
      },
    },

    primaryAppBar: {
      height: 50,
    },
    primaryDrawer: {
      width: 240,
      closed: 70,
    },

    secondaryDrawer: {
      width: 240,
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
  return responsiveFontSizes(theme);
};

export default createMuiTheme;
