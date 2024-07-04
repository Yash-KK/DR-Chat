import { Box, useTheme } from "@mui/material";

const SecondaryDrawer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: `${theme.secondaryDrawer.width}px`,
        height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
        mt: `${theme.primaryAppBar.height}px`,
        borderRight: `1px solid ${theme.palette.divider}`,
        display: { xs: "none", sm: "block" },
        overflow: "auto",
      }}
    >
      {Array.from({ length: 50 }, (_, index) => (
        <div key={index + 1}>{index + 1}</div>
      ))}
    </Box>
  );
};
export default SecondaryDrawer;
