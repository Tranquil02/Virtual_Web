import React from 'react';
import "./notfound.css";
import Home from '../../components/home/home';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='Not-found '>
            <div class="nf-container">
                <div class="dark-layer"></div>
                <div class="text-big">
                    <h1>404</h1>
                </div>
                <div class="info">
                    <h2>We can't find <span>that page</span></h2>
                    <p>We're pretty sure <span>that page</span> used to be here but seems to have gone missing. We apologize on behalf of <span>that page</span>.</p>
                    <button className='nf-home'><Link to={"/"}>Home</Link></button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
