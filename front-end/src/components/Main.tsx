import { Box, useTheme } from "@mui/material";

const Main = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: `${theme.primaryAppBar.height}px`,
        height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 50 }, (_, index) => (
        <div key={index + 1}>{index + 1}</div>
      ))}
    </Box>
  );
};
export default Main;
