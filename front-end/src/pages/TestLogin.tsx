import { useAuthServiceContext } from "../components/context/AuthContext";
import { useState } from "react";
import useAxioxWithInterceptor from "../helpers/jwtInteceptor";

const TestLogin = () => {
  const [username, setUsername] = useState("");
  const jwtAxios = useAxioxWithInterceptor();
  const getUserDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const accessToken = localStorage.getItem("access_token");

      const response = await jwtAxios.get(
        `http://127.0.0.1:8000/api/account/?user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const userDetails = response.data;
      console.log("userDetails: ", userDetails);
      setUsername(userDetails.username);
    } catch (err: any) {
      return err;
    }
  };
  const { isLoggedIn, logout } = useAuthServiceContext();
  console.log("username: ", username);
  return (
    <>
      <div>{isLoggedIn.toString()}</div>
      <div>
        <button onClick={logout}>Logout</button>
        <button onClick={getUserDetails}>Get User Details</button>
      </div>
      <div>Username: {username}</div>
    </>
  );
};

export default TestLogin;
