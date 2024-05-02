import { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteV6,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/home";
import Artworks from "./pages/art-work/Artwork";
import Discover from "./pages/discover/Discover";
import User from "./pages/User/user";
import NotFound from "./pages/NotFound/NotFound";
import Toaster, { toast } from "react-hot-toast";
import { Context, server } from "./main";
import axios from "axios";
import Blog3 from "./components/Auction/auction";
import Comming from "./pages/event/comming";
import Listing from "./components/create/Create";

function App() {
  const { setUser, isAuthenticated,setisAuthenticated, setLoading, loading } =
    useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if(res.data.isLoggedIn==true){
          setisAuthenticated(true);
          setUser(res.data.users);
        }
        // console.log(res.data.isLoggedIn);
        // console.log(isAuthenticated);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Login first");
        setUser({});
        setisAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Routes>
        <RouteV6 path="/" element={<Home />} />
        <RouteV6 path="/new" element={<Artworks />} />
        <RouteV6 path="/discover" element={<Discover />} />
        <RouteV6 path="/user" element={<User />} />
        <RouteV6 path="/event" element={<Blog3 />} />
        <RouteV6 path="/about" element={<Comming/>} />
        <RouteV6 path="/auction/create" element={<Comming-/>} />
        {/* <RouteV6 path="/auction/create" element={<Listing/>} /> */}
        <RouteV6 path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
