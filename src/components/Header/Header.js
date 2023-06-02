import React from 'react';
import logo from '../../images/LOGO.png';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='header-1'>
                <div>
                    <a className='head1-a' href='/shop'>Shop</a>
                    <a className='head1-a' href='/media'>media</a>
                    <a className='head1-a' href='/tree'>Gash</a>
                    <a className='head1-a' href='/lesson'>Looslon</a>
                </div>
                <div>
                    <a className='head1-a' href='/shop'>Shop</a>
                    <a className='head1-a' href='/media'>media</a>
                    <a className='head1-a' href='/tree'>Gash</a>
                    <a className='head1-a' href='/lesson'>Looslon</a>
                </div>
            </div>
            <div className='header-2'>
                <a href='/home'><img src={logo} alt="this is logo" /></a>
                <div>
                    <a className='head2-a' href='/shop'>Shop</a>
                    <a className='head2-a' href='/media'>media</a>
                    <a className='head2-a' href='/tree'>Gash</a>
                    <a className='head2-a' href='/lesson'>Looslon</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;