import { useTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, Typography } from "@mui/material";

const PrimaryAppBar = () => {
  const theme = useTheme();
  return (
    <AppBar sx={{
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`
    }}>
      <Toolbar
        variant="dense"
        sx={{
          height: theme.primaryAppBar.height,
          minHeight: theme.primaryAppBar.height,
        }}
      >
        <Link href="/" underline="none" color="inherit" >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { fontWeight:700, letterSpacing: "-0.5px" } }}
          />
          DRChat
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default PrimaryAppBar;
