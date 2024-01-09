import React from 'react';
import './LandingImg.css'

const LandingImg = ({ imageSrc }) => {
    return (
        <div className='landing'>
            <img src={imageSrc} alt='Landing' className='landing-image' />
            <div className='landing-container'>
                 <h1 className='landing-title'> Bass & Buns </h1>
                 <p className='landing-subtitle'>Restaurant</p>
            </div>
           
        </div>
    )
}

export default LandingImg;
