import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './ImagesSlider.css';

const ImagesSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next image or loop back to the first image
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [images]);

  return (
    <div className="carousel">
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.8 }}
          className="background-container"
        >
          <img src={images[activeIndex].url} alt="back-image" className='carousel-image'/>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImagesSlider;