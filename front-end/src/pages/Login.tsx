import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>username</label>
        <input
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          type="text"
        />

        <label>password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;
