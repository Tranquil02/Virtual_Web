import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { server } from "../../main";

function RegistrationForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [isuser, setIsUser] = useState(false);
  const [cnfPass, setCnfPass] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //     const usertoken = localStorage.getItem("token");
  //     setIsUser(usertoken)
  // }, []);

  const handleChange = ({ currentTarget: input }) => {
    // console.log(data);
    setData({ ...data, [input.name]: input.value });
  };

  const SubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (data.password !== cnfPass) {
      toast.error("Passwords do not match");
      setLoading(false);
      console.log("Passwords do not match");
      return;
    }
    try {
      const newUser = await axios.post(`${server}/auth/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      // console.log(newUser.data.message);
      toast.success(newUser.data.message);
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
    }
    setLoading(false);
    setData({
      name: "",
      email: "",
      password: "",
    });
    setCnfPass("");
  };

  if (isuser) return <Navigate to={"/"} />;
  return (
    <form className="account-form" onSubmit={SubmitHandler}>
      <div className="account-form-fields sign-up">
        <input
          value={data.name}
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={data.email}
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />

        <input
          value={data.password}
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <input
          value={cnfPass}
          onChange={(e) => setCnfPass(e.target.value)}
          id="cnfPass"
          name="cnfPass"
          type="password"
          placeholder="Confirm password"
          required
        />
      </div>
      <button
        className="btn-submit-form"
        type="submit"
        disabled={loading ? "disabled" : ""}
      >
        {loading ? "Registering..." : "Sign up"}
      </button>
    </form>
  );
}

export default RegistrationForm;
