import React from 'react';
import './Artwork.css';
import Slider from '../../components/slider/slider';
import Contact from '../../components/contact/contact';
const Artworks = () => {
    return (
        <>
        <div className="artworks-container">
            <button className='btn-art'>New Art Work</button>
            <div className="artist">
                <div className="left-work">
                    <div className="art-heading">
                        <h2 className="artworks-title">New Artworks</h2>
                        <h2 className="artworks-title">From Our Artist</h2>
                    </div>
                    <p className='para'>Explore our diverse exhibitions, from stunning</p>
                    <p className='para'>paintings to captivatingillustrations, thought-provoking</p>
                    <p className='para'> installations to beautiful sculptures.</p>
                </div>
                <div className="right-work">
                    <div className="active works">
                        <Slider />
                    </div>
                    <div className=" works2">
                    </div>
                </div>
            </div>
        </div>
        <Contact/>
        </>
    );
}

export default Artworks;