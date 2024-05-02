import React, { useContext } from "react";
import "./navbar.css";
import { Context, server } from "../../main";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${server}/auth/logout`, {
        withCredentials: true,
      });
      if (res.data.success === true) {
        setisAuthenticated(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <ul className="navigation">
      <div className="right_nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/discover">Discover</a>
        </li>
        <li>
          <a href="/event">Event</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </div>
      <li class="logo">
        <a href="#"></a>
      </li>
      <div className="left_nav">
        {isAuthenticated ? (
          <li>
            <button className="white_btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <li>
            <button className="white_btn">
              <Link to="/user">Login</Link>
            </button>
          </li>
        )}
        {/* {console.log(isAuthenticated)} */}
        {/* <li><a href="">Sign Up</a></li> */}
      </div>
    </ul>
  );
};

export default Navbar;
