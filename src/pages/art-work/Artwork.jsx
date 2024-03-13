import React from 'react';
import './Artwork.css';
import flowerImg from "../../assets/flower.jpg";
import god from "../../assets/gods.jpg"
import PhotoSlider from '../../components/slider/slider';
const Artworks = () => {
    return (
        <div className="artworks-container">
            <button className='btn-art'>New Art Work</button>
            <div className="artist">
                <div className="left-work">
                    <h2 className="artworks-title">New Artworks</h2>
                    <h2 className="artworks-title">From Our Artist</h2>
                </div>
                <div className="right-work">
                    <div className="active works">
                        <PhotoSlider/>
                    </div>
                    <div className=" works2">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artworks;