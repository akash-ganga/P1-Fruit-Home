import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFaceAngry, faGaugeHigh, faKey, faLadderWater } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/LOGO.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='header-1'>
                <div>
                    <a href='/shop'>ABOUT</a>
                    <a href='/media'>SERVICES</a>
                    <a href='/tree'>CONTACT</a>
                    <a href='/lesson'>BEYOND</a>
                </div>
                <div>
                    <a href='/shop'><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a>
                    <a href='/shop'><FontAwesomeIcon icon={faFaceAngry}></FontAwesomeIcon></a>
                    <a href='/shop'><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon></a>
                    <a href='/shop'><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></a>
                    <a className='sp-lin-mar' href='/shop'><FontAwesomeIcon icon={faLadderWater}></FontAwesomeIcon></a>
                </div>
            </div>
            <div className='header-2'>
                <a className='logo-link' href='/home'><img src={logo} alt="this is logo" /></a>
                <div>
                    <a href='/shop'>Shop</a>
                    <a href='/media'>media</a>
                    <a href='/tree'>Gash</a>
                    <a href='/lesson'>Looslon</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;