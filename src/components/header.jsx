import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.svg'


function Header () { 
    return (
        <div className="header">
            <div className="header__logo"> 
                <Link to='/home'>  <img src={logo} alt="My logo" /></Link>
            </div>
            <div  className="header__menu">
                <ul>
                <li><NavLink to='/reservation' className="header__link" activeClassName="active"> Reservations</NavLink> </li>
                    <li><NavLink to='/menu' className="header__link" activeClassName="active"> Menu</NavLink></li>
                    <li><NavLink to='/story' className="header__link" activeClassName="active"> Our Story</NavLink></li>
                </ul>
            </div>
        </div>
    )

}

export default Header;