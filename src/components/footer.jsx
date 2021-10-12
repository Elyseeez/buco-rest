import React from "react";
import {Link} from 'react-router-dom';
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'



function Footer () {
    return ( 
        <div className="footer">
          <div className="container">
            <div className="footer__content">
                <ul>
                    <li> <Link to='#'>  <img src={twitter} alt="My logo" /></Link></li>
                    <li><Link to='#'>  <img src={facebook} alt="My logo" /></Link></li>
                    <li><Link to='#'>  <img src={instagram} alt="My logo" /></Link></li>
                </ul>
            </div>
        <div className="footer__info">
            <h2 className="footer__info-title">1520 century square College Station, TX</h2>
           <div><p className="footer__info-subtitle">979-222-2222</p></div> 
        </div>
        </div>
        </div>    
    )
    
}

export default Footer;