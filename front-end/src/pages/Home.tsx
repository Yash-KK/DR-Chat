import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PrimaryAppBar from "../components/PrimaryAppBar";
import PrimaryDrawer from "../components/PrimaryDrawer";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryDrawer />
    </Box>
  );
};
export default Home;
