import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PrimaryAppBar from "../components/PrimaryAppBar";
import PrimaryDrawer from "../components/PrimaryDrawer";
import SecondaryDrawer from "../components/SecondaryDrawer";
import Main from "../components/Main";
const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryDrawer />
      <SecondaryDrawer />
      <Main />
    </Box>
  );
};
export default Home;
