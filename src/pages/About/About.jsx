import React from 'react';
import transition from '../../transition';
import Container from '@mui/material/Container';
import './About.css';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer/Footer';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import MenuButton from '../../components/MenuButton/MenuButton';

const About = () => {
  return (
    <>
      <Container className='about-container' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <Box className='about-story' sx={{marginBottom: '35px', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 className='about-title'>Our history</h2>
          <h4 className='about-subtitle'>Work while listening to the best rock bands and be the bests at it!</h4>
          <p className='about-p'>The journey wasn't easy, but the beautiful people who embraced our space made it worthwhile. Our walls echo the rock spirit with signed memorabilia from renowned musicians.</p>
          <p className='about-p'>Our place is not just about burgers; it's about people making memories. Over the years, we've expanded, survived, and even paid ourselves a salary! We invite you to join our story, a tale of a small business fueled by passion and a love for good music.</p>
        </Box>
        <Box className='menu-btn_container'>
          <MenuButton title={'Rock Your Taste Buds!'} subtitle={'Dive into our menu of rockin’ burgers. Hit the button below and let the feast begin!'} route={'menu'}/>
        </Box>
      </Container>
      <ScrollButton />
      <Footer />
    </>

  )
}

export default transition(About);