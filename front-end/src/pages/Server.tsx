import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PrimaryAppBar from "../components/template/PrimaryAppBar";
import PrimaryDrawer from "../components/PrimaryDrawer";
import SecondaryDrawer from "../components/template/SecondaryDrawer";
import Main from "../components/template/Main";
import MessageInterface from "../components/MessageInterface";
import ServerChannel from "../components/Servers/ServerChannels";
import UserServers from "../components/Servers/UserServers";
import { useNavigate, useParams } from "react-router-dom";
import useCrud from "../hooks/useCrud";
import { useEffect } from "react";
import { ServerType } from "../@types/server";

const Server = () => {
  const navigate = useNavigate();
  const { serverId, channelId } = useParams();

  const { dataCRUD, error, isLoading, fetchData } = useCrud<ServerType>(
    [],
    `/server/select/?server_id=${serverId}`
  );

  if (error !== null && error?.message === "400") {
    navigate("/");
    return null;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const isChannel = () => {
    if (!channelId) {
      return true;
    }

    return dataCRUD.some((server) =>
      server.channel_server.some(
        (channel) => channel.id === parseInt(channelId)
      )
    );
  };

  useEffect(() => {
    if (!isChannel()) {
      navigate(`/server/${serverId}`);
    }
  }, [isChannel, channelId]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryDrawer>
        <UserServers open={false} data={dataCRUD}></UserServers>
      </PrimaryDrawer>
      <SecondaryDrawer>
        <ServerChannel data={dataCRUD}></ServerChannel>
      </SecondaryDrawer>
      <Main>
        <MessageInterface data={dataCRUD} />
      </Main>
    </Box>
  );
};
export default Server;
