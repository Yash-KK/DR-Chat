import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';

const Home = () => {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        <CssBaseline />
      This Box renders as an HTML section element.
    </Box>
  );
};
export default Home;
