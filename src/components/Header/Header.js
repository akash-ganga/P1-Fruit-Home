import React from 'react';
import logo from '../../images/LOGO.jpg';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='header-1'>
                <div>
                    <a href='/shop'>Shop</a>
                    <a href='/media'>media</a>
                    <a href='/tree'>Gash</a>
                    <a href='/lesson'>Looslon</a>
                </div>
                <div>
                    <a href='/shop'>Shop</a>
                    <a href='/media'>media</a>
                    <a href='/tree'>Gash</a>
                    <a href='/lesson'>Looslon</a>
                </div>
            </div>
            <div className='header-2'>
                <img src={logo} alt="this is logo" />
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