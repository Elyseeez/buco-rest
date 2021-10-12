import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg'


function Header () { 
    return (
        <div className="header">
            <div className="header__logo"> 
                <Link to='/home'>  <img src={logo} alt="My logo" /></Link>
            </div>
            <div  className="header__menu">
                <ul>
                <li><Link to='/reservation' className="header__link"> Reservations</Link> </li>
                    <li><Link to='/menu' className="header__link"> Menu</Link></li>
                    <li><Link to='/story' className="header__link"> Our Story</Link></li>
                </ul>
            </div>
        </div>
    )

}

export default Header;