import React from 'react';
import "./home.css";
import homeImage from '../../assets/home.jpg';

const Home = () => {
    return (
        <div className="container">
            <button className='btn transparent'>Art Gallery Platform</button>
            <header className="header">
                <div className="header-text">
                    <h1>Dive into creativity with our
                    </h1> <h1>gallery collection</h1>
                </div>
            </header>
            <main className="main">
                <p>Immerse yourself in the captivating stories behind each artwork, as our artists draw inspiration from cultures, nature, and everyday life.</p>
            </main>
            <button className="btn visit-gallery">
                <a href="#">Visit Gallery</a>
            </button>
        </div>
    )
}

export default Home
