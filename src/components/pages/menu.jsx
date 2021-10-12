import React from 'react';
import arrowdown from '../../assets/arrowdown.png';
import MenuList from './list/menu-list';
import BarList from './list/bar-list';


function Menu () {
    return (
        <div className="menu"> 
        <div className="wrapper">
            <div className="menu__top">
                <h2 className="menu__tag"> Menu</h2>
                 <img src={arrowdown} alt="arrow" />
            </div>
           <MenuList/>
           <BarList/> 
            </div>
        <div className="menu__bottom">
        <div className="menu__bottom-fake">Make Reservations</div>
            </div> 

        </div>

    )
    
}

export default Menu;