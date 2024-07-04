import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import DrawerToggle from "./DrawerToggle";
import MuiDrawer from "@mui/material/Drawer";
import React from "react";

type Props = {
  children: ReactNode;
};

type ChildProps = {
  open: boolean;
};

type ChildElement = React.ReactElement<ChildProps>;

const PrimaryDrawer: React.FC<Props> = ({ children }) => {
  const theme = useTheme();

  /* This hides the Drawer is the width is less than 600px */
  const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(isAboveSm);
  useEffect(() => {
    setOpen(isAboveSm);
  }, [isAboveSm]);

  const openedMixin = () => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = () => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    width: theme.primaryDrawer.closed,
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const Drawer = styled(
    MuiDrawer,
    {}
  )(({ theme, open }) => ({
    width: theme.primaryDrawer.width,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open &
      {
        ...openedMixin(),
        "& .MuiDrawer-paper": openedMixin(),
      }),
    ...(!open && {
      ...closedMixin(),
      "& .MuiDrawer-paper": closedMixin(),
    }),
  }));
  return (
    <Drawer
      open={open}
      variant={!isAboveSm ? "temporary" : "permanent"}
      PaperProps={{
        sx: {
          mt: `${theme.primaryAppBar.height}px`,
          height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
          width: theme.primaryDrawer.width,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 0,
            width: open ? "auto" : "100%",
          }}
        >
          <DrawerToggle
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        </Box>

        {React.Children.map(children, (child) => {
          return React.isValidElement(child)
            ? React.cloneElement(child as ChildElement, { open })
            : child;
        })}
      </Box>
    </Drawer>
  );
};
export default PrimaryDrawer;
