import React from 'react';
import transition from '../../transition';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './Contact.css';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import { Card, CardContent, Typography } from '@mui/material';

const Contact = () => {
  return (
    <>
      <Container className='contact-container' sx={{display: 'flex', alignItems: 'center', width: '100%', height: '100%'}}>
        <Box sx={{ width: '100%' }}>
          {/* informacion de direccion telefono etc */}
          <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'transparent', boxShadow: 'none'}}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h4 className='contact-title'>Want to contact us?</h4>
              <p className='contact-subtitle'>You can reach us at:</p>
            </CardContent>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <p className='personal-directions'>Fake address 123, Country</p>
              <p className='personal-phone'>000 111 222 333</p>
              <p className='personal-email'>bass_buns@email.com</p>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: '100%' }}>
          {/* Formulario de contacto */}
          <Form />
        </Box>
      </Container>
      <Footer /> 
    </>
  )
}

export default transition(Contact);