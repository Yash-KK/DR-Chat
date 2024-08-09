import React, { useEffect, useState } from "react";
import { ServerType } from "../@types/server";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  ListItemAvatar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { MEDIA_URL } from "../../config";
import { MoreVert } from "@mui/icons-material";
import ServerChannels from "./Servers/ServerChannels";

interface MICProps {
  data: ServerType[];
}
const MessageInterfaceChannels: React.FC<MICProps> = ({ data }) => {
  const [sideMenu, setSideMenu] = useState(false);
  const theme = useTheme();
  const { serverId, channelId } = useParams();
  const channelName =
    data
      ?.find((server) => server.id === Number(serverId))
      ?.channel_server?.find((channel) => channel.id === Number(channelId))
      ?.name || "home";

  const toggleDrawer =
    (newOpen: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
      setSideMenu(newOpen);
    };

  const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    if (isAboveSm && sideMenu) {
      setSideMenu(false);
    }
  }, [isAboveSm]);
  const list = () => (
    <Box
      sx={{ paddingTop: `${theme.primaryAppBar.height}px`, minWidth: 200 }}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <ServerChannels data={data} />
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
        color="default"
        position="sticky"
        elevation={0}
      >
        <Toolbar
          variant="dense"
          sx={{
            minHeight: theme.primaryAppBar.height,
            height: theme.primaryAppBar.height,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <ListItemAvatar sx={{ minWidth: "40px" }}>
              <Avatar
                alt="Server Icon"
                src={`${MEDIA_URL}${data?.[0]?.icon}`}
                sx={{ width: 30, height: 30 }}
              />
            </ListItemAvatar>
          </Box>
          <Typography noWrap component="div">
            {channelName}
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)} edge="end">
              <MoreVert />
            </IconButton>
          </Box>

          <Drawer anchor="left" open={sideMenu} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MessageInterfaceChannels;
