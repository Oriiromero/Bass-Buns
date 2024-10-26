import React from 'react';
import { useInView } from "react-intersection-observer";
import carrot from '/images/carrot.png';
import chili from '/images/chili.png';
import './MenuItem.css';

const MenuItem = ({ dishes }) => {

    return (
        <div className='dishes_container'>
            {dishes.map((dish) => (
                <div key={dish.id} className='dishes__content'>
                    <div className='dishes_info' key={dish.id}>
                        <h1 className='dishes__title'>{dish.name}</h1>
                        <p className='dishes__price'>${dish.price}</p>
                        <p className='dishes__ingredients'>{dish.ingredients}</p>
                        <div className='icons-container'>
                            {dish.spicy ? <img src={chili} alt='spicy' className='spice-icon' /> : ''}
                            {dish.veggie ? <img src={carrot} alt='veg' className='veg-icon' /> : ''}
                        </div>
                    </div>
                    <div className='dishes__img'>
                        <img src={dish.image} alt='dish' className='dishes_image' />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default MenuItem;