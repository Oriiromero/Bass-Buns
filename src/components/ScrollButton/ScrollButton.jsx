import React, { useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 500);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>
            <ExpandLessIcon className='scroll__btn' fontSize='large' onClick={scrollToTop}/>
        </div>
    )
};

export default ScrollButton;
