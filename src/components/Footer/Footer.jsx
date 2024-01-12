import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='content'>
            <div className='left'>
                <h4 className='footer_title'>Follow us in:</h4>
                <a className='footer_a' href='#'>Facebook</a>
                <a className='footer_a' href='#'>Instagram</a>
            </div>
            <div className='right'>
                <p className='footer_copy'>© Oriana Nahir Romero, 2024</p>
            </div>
        </div>
    </footer>
  )
};

export default Footer;
