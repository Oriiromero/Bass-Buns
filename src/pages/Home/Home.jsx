import React, { useState } from 'react';
import './Home.css';
import rock_green from '/images/rock_green.jpg';
import landing1 from '/images/landing1.jpg';
import landing2 from '/images/landing2.jpg';
import landing3 from '/images/landing3.jpg';
import LandingImg from '../../components/LandingImg/LandingImg';
import Slider from '../../components/Slider/Slider';
import MenuButton from '../../components/MenuButton/MenuButton';
import transition from '../../transition';
import Footer from '../../components/Footer/Footer';
import ScrollButton from '../../components/ScrollButton/ScrollButton';


const Home = () => {

  return (
    <div className='home'>
      <LandingImg imageSrc={rock_green} />
      <div className='slider-container'>
        <Slider imageSrc={landing1} title={'Neon Notes: A Symphony in Spirits'} subtitle={'Where Vinyl Spins and the Night Begins'} />
        <Slider imageSrc={landing2} title={'Harmony on the Wall: A Visual Concerto'} subtitle={'Where Art, Music, and Inspiration Collide'} flipped={true} />
        <Slider imageSrc={landing3} title={'Jukebox Jamboree: A Melody of Memories'} subtitle={'Step into the Spotlight of the Rock Records Restaurant'} />
      </div>
      <div className='menu-btn_container'>
        <MenuButton title={'Rock Your Taste Buds!'} subtitle={'Dive into our menu of rockin’ burgers. Hit the button below and let the feast begin!'} route={'menu'}/>
      </div>
      <ScrollButton />
      <Footer />      
    </div>
  )
}

export default transition(Home);