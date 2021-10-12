import React from 'react';


function MenuList () { 
    return ( 
        <div className="menu__content">
            <div className="menu__content-wrapper">
        <h2 className="menu__content-title">CREATE YOUR OWN</h2>
        <p className="menu__content-subtitle">PASTA </p>
        <div className="menu__content-list">
            <p className="menu__content-sause">CHOOSE YOUR SAUCE:</p>
        <ul>
            <li>Marinara</li>
            <li>Pesto</li>
            <li>Alfredo</li>
            <li>Bolognese</li>
            <li>Pomodoro</li>
            <li>Benchamel</li>
            <li>Umbrian Ragu</li>
            <li>Truffle</li>
        </ul>
        </div>
        <div className="menu__content-list">
            <p className="menu__content-pasta">CHOOSE YOUR pasta:</p>
        <ul>
            <li>Linguine</li>
            <li>Gnocchi</li>
            <li>Fettuccine</li>
            <li>Rotin</li>
            <li>Penne</li>
            <li>Fusilli</li>
            <li>Tortellini</li>
            <li>Spaghetti</li>
        </ul>
        </div>
        <div className="menu__content-list">
            <p className="menu__content-protein">CHOOSE YOUR protein:</p>
        <ul>
            <li>Chicken</li>
            <li>Pork</li>
            <li>Beef</li>
            <li>Vegetables</li>
        </ul>
        </div>
        </div>
    </div>
    )

}

export default MenuList; 