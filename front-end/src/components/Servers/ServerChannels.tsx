import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

import useCrud from "../../hooks/useCrud";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ServerType } from "../../@types/server";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
}

interface ServerChannelsProps {
  data: ServerType[];
}
const ServerChannels: React.FC<ServerChannelsProps> = ({ data }) => {
  const theme = useTheme();
  const { serverId } = useParams();

  const serverName = data?.[0]?.name ?? "Server";
  const { dataCRUD, fetchData } = useCrud<Category>([], "/server/category/");
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [dataCRUD]);
  return (
    <>
      <Box
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          px: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          position: "sticky",
          top: 0,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography
          variant="body1"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {serverName}
        </Typography>
      </Box>

      <List sx={{ py: 0 }}>
        {data.flatMap((obj) =>
          obj.channel_server.map((item) => (
            <ListItem
              disablePadding
              key={item.id}
              sx={{ display: "block" }}
              dense={true}
            >
              <Link
                to={`/server/${serverId}/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton sx={{ minHeight: 48 }}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        textAlign="start"
                        paddingLeft={1}
                      >
                        {item.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))
        )}
      </List>
    </>
  );
};

export default ServerChannels;
