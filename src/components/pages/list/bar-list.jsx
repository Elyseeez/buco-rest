import React from 'react';

function BarList () { 
    return ( 
        <div className="menu__bar">
            <div className="menu__bar-wrapper">
        <h2 className="menu__bar-title">Speakeasy</h2>
        <p className="menu__bar-subtitle">Bar </p>
        <div className="menu__bar-list">
            <p className="menu__bar-classics">Classics:</p>
        <ul>
            <li>Old-Fashioned  8</li>
            <li>Gin and Tonic  10</li>
            <li>Moscow Mule  7</li>
            <li>Manhattan  10</li>
        </ul>
        </div>
        <div className="menu__bar-list">
            <p className="menu__bar-originals">Originals:</p>
        <ul>
            <li>Spritz Veneziano 10</li>
            <li>Negroni 11</li>
            <li>Garibaldi 8</li>
            <li>Milano-Torina 10</li>
        </ul>
        </div>
        <div className="menu__bar-list">
            <p className="menu__bar-wine">Wine:</p>
        <ul>
            <li>Baralo 12</li>
            <li>Franciacarta 10</li>
            <li>Lambrisco 7</li>
            <li>Chianti-Classico 8</li>
        </ul>
        </div>
        </div>
    </div>
    )
}


export default BarList;