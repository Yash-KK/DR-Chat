import { useAuthServiceContext } from "../components/context/AuthContext";

const TestLogin = () => {
  const { isLoggedIn } = useAuthServiceContext();
    console.log("isLoggedIn", isLoggedIn)
  return <>{isLoggedIn.toString()}</>;
};

export default TestLogin;
