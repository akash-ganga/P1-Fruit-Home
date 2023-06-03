import React from 'react';
import first from '../../images/first1.jpg';
import './Sec1.css';

const Sec1 = () => {
    return (
        <div className='sec1'>
            <img src={first} alt="fruit tree"/>
            <div className='sec1-text'>
                <h1>We are Fruits. We have fruits.</h1>
                <h1>Stories about fruits, ideas about fruits</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil dicta archfgf</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil dicta</p>
            </div>
        </div>
    );
};

export default Sec1;