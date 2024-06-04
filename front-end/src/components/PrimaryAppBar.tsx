import { Link, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import React, { useEffect, useState } from "react";

const PrimaryAppBar: React.FC = () => {
  const theme = useTheme();
  const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));

  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    if (isAboveSm && sideMenu) {
      setSideMenu(false);
    }
  }, [isAboveSm]);

  const toggleDrawer =
    (newOpen: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
      setSideMenu(newOpen);
    };
  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          height: theme.primaryAppBar.height,
          minHeight: theme.primaryAppBar.height,
        }}
      >
        <Box display={{ xs: "block", sm: "none" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 1 }}
            onClick={toggleDrawer(!sideMenu)}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
        </Box>

        <Drawer open={sideMenu} onClose={toggleDrawer(false)}>
          {Array.from({ length: 50 }, (_, index) => (
            <div key={index + 1}>{index + 1}</div>
          ))}
        </Drawer>
        <Link href="/" underline="none" color="inherit">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { fontWeight: 700, letterSpacing: "-0.5px" } }}
          >
            DRCHAT
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default PrimaryAppBar;
