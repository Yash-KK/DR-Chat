import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  ListItemAvatar,
  useTheme,
  Container,
} from "@mui/material";

import useCrud from "../../hooks/useCrud";
import { useEffect } from "react";
import { MEDIA_URL } from "../../../config";
import { Link, useParams } from "react-router-dom";

interface Server {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
}

const ExploreServers = () => {
  const { categoryName } = useParams();
  const url = categoryName
    ? `/server/select/?category=${categoryName}`
    : `/server/select`;

  const { dataCRUD, fetchData } = useCrud<Server>([], url);

  useEffect(() => {
    fetchData();
  }, [categoryName]);

  console.log("DataCRUD", dataCRUD);
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ pt: 6 }}>
          <Typography
            variant="h3"
            noWrap
            component="h1"
            sx={{
              display: {
                sm: "block",
                fontWeight: 700,
                letterSpacing: "-2px",
              },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {categoryName ? categoryName : "Popular Channels"}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ExploreServers;
