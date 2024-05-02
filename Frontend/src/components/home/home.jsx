import React, { useContext } from "react";
import "./home.css";
import { Context } from "../../main";
import homeImage from "../../assets/home.jpg";
import Artworks from "../../pages/art-work/Artwork";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

const Home = () => {
  const { isAuthenticated } = useContext(Context);
  return (
    <>
      <div className="home-container">
        <button className="btn transparent">Art Gallery Platform</button>
        <header className="header">
          <div className="header-text">
            <h1>Dive into creativity with our</h1> <h1>gallery collection</h1>
          </div>
        </header>
        <main className="main">
          <p>
            Immerse yourself in the captivating stories behind each artwork, as
            our artists draw inspiration from cultures, nature, and everyday
            life.
          </p>
        </main>
        <button className="btn visit-gallery">
          {!isAuthenticated ? (
            <a href="/user">Visit Gallery</a>
          ) : (
            <a href="https://virtual-gallery.onrender.com/">Visit Gallery</a>
          )}
        </button>
      </div>
      <Artworks />
      {/* <Footer/> */}
    </>
  );
};

export default Home;
