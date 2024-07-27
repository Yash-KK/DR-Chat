import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PrimaryAppBar from "../components/template/PrimaryAppBar";
import PrimaryDrawer from "../components/PrimaryDrawer";
import SecondaryDrawer from "../components/template/SecondaryDrawer";
import Main from "../components/template/Main";
import PopularChannels from "../components/Channels/PopularChannels";
import ExploreCategories from "../components/Categories/ExploreCategories";
import ExploreServers from "../components/Servers/ExploreServers";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryDrawer>
        <PopularChannels></PopularChannels>
      </PrimaryDrawer>
      <SecondaryDrawer>
        <ExploreCategories></ExploreCategories>
      </SecondaryDrawer>
      <Main>
        <ExploreServers />
      </Main>
    </Box>
  );
};
export default Home;
