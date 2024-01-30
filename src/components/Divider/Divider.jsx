import React from 'react';
import './Divider.css';

const Divider = ({ title }) => {

    return (
        <div className='divider'>
            <div className='divider-content'>
                <h4 className='divider_title'>{title}</h4>
            </div>
        </div>
    )
}

export default Divider;
