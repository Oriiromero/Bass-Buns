import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './MenuButton.css';
import { useNavigate } from "react-router-dom";

const MenuButton = ({title, subtitle, route}) => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate(`/${route}`)
  }

  return (
    <div className='button-container'>
        <h1 className='button__title'>{title}</h1>
        <p className='button__subtitle'>{subtitle}</p>
        <button onClick={goToMenu} className='button__btn'>Go  <ChevronRightIcon sx={{fontSize: 'medium'}}/></button>
    </div>
  )
}

export default MenuButton;
