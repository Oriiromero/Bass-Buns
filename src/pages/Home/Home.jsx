import React, { useState } from 'react';
import './Home.css';
import rock_green from '/images/rock_green.jpg';
import landing1 from '/images/landing1.jpg';
import landing2 from '/images/landing2.jpg';
import landing3 from '/images/landing3.jpg';
import LandingImg from '../../components/LandingImg/LandingImg';
import Slider from '../../components/Slider/Slider';

const Home = () => {

  return (
    <div className='home'>
      <LandingImg imageSrc={rock_green} />
      <div className='slider-container'>
        <Slider imageSrc={landing1} title={'Neon Notes: A Symphony in Spirits'} subtitle={'Where Vinyl Spins and the Night Begins'} />
        <Slider imageSrc={landing2} title={'Harmony on the Wall: A Visual Concerto'} subtitle={'Where Art, Music, and Inspiration Collide'} flipped={true} />
        <Slider imageSrc={landing3} title={'Jukebox Jamboree: A Melody of Memories'} subtitle={'Step into the Spotlight of the Rock Records Restaurant'} />
      </div>
      
    </div>
  )
}

export default Home;