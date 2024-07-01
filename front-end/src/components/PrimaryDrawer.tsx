import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import DrawerToggle from "./DrawerToggle";

const PrimaryDrawer = () => {
  const theme = useTheme();

  /* This hides the Drawer is the width is less than 600px */
  const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(isAboveSm);
  useEffect(() => {
    setOpen(isAboveSm);
  }, [isAboveSm]);

  return (
    <Drawer
      open={open}
      variant="persistent"
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
            width: open ? "auto" : "100%"
        }}
        > 
        <DrawerToggle />       
          {Array.from({ length: 50 }, (_, index) => (
            <div key={index + 1}>{index + 1}</div>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
export default PrimaryDrawer;
