import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFaceAngry, faGaugeHigh, faKey, faLadderWater } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/LOGO.png';
import './Header.css';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className='navbar'>
            <div className='header-1'>
                <div>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/charts'>CHARTS</Link>
                    <Link to='/shipping'>SHIPPING</Link>
                    <Link to='/beyond'>BEYOND</Link>
                </div>
                <div>
                    <Link to='/shop'><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></Link>
                    <Link to='/shop'><FontAwesomeIcon icon={faFaceAngry}></FontAwesomeIcon></Link>
                    <Link to='/shop'><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon></Link>
                    <Link to='/shop'><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></Link>
                    <Link className='sp-lin-mar' to='/shop'><FontAwesomeIcon icon={faLadderWater}></FontAwesomeIcon></Link>
                </div>
            </div>
            <div className='header-2'>
                <Link className='logo-link' to='/'><img src={logo} alt="this is logo" /></Link>
                <div>
                    <Link to='/basket-detail'>Basket</Link>
                    <Link to='/fruit-detail'>Fruit-Detail</Link>
                    {
                        user?.uid ? <Link onClick={logOut}>Logout</Link> :
                            <>
                                <Link to='/register'>Register</Link>
                                <Link to='/login'>Login</Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;