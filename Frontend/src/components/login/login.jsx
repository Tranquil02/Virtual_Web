import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context, server } from "../../main";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const [data, setData] = useState({ email: "", password: "" });
  const { isAuthenticated, setisAuthenticated, loading, setLoading } =
    useContext(Context);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const MyUser = await axios.post(
        `${server}/auth/login`,
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
      if (MyUser.data.success === true) setisAuthenticated(true);
      toast.success(MyUser.data.message);
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
    }
    setLoading(false);
  };
  if (isAuthenticated) return <Navigate to={"/"} />;
  return (
    <form className="account-form" onSubmit={handleSubmit}>
      <div className="account-form-fields sign-in">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={data.email}
          onChange={handleChange}
          required
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn-submit-form" type="submit" disabled={loading}>
        {loading ? "Loading..." : "Sign in"}
      </button>
    </form>
  );
}

export default LoginForm;
