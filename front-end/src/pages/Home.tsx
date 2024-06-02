import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PrimaryAppBar from "../components/PrimaryAppBar";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
    </Box>
  );
};
export default Home;
