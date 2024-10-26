import React, { useEffect } from 'react'
import { Box } from '@mui/material';
import transition from '../../transition';
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';
import './Menu.css';
import veg2 from '/images/veg2.jpg';
import chicken1 from '/images/chicken1.jpg';
import burger2 from '/images/burger2.jpg';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/Footer/Footer';
import MenuList from '../../components/MenuList/MenuList';
import { useLocation } from 'react-router-dom';
import ScrollButton from '../../Buttons/ScrollButton/ScrollButton';

const images = [{ id: 0, url: veg2 }, { id: 1, url: chicken1 }, { id: 2, url: burger2 }]
const dividerTitle = 'Menu';

const Menu = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className='menu'>
        {/* SLIDER DE IMAGENES */}
        <Box className='carousel-container'>
          <ImagesSlider images={images} />
        </Box>
        {/*  MENU TITULO */}
        <Divider title={dividerTitle} />
        {/* SECCIONES DEL MENU ENTRANTE/HAMBURGESAS Y ENSALADAS/POSTRES */}
        <MenuList />
      </div>
      {/* FOOTER */}
      <Box className='menu-bottom'>
        <ScrollButton />
        <Footer />
      </Box>

    </>

  )
}

export default transition(Menu);
