import React from 'react';
import pasta from "../../assets/lapasta1.jpg";

function Home () {
    return (
        <div className="home">
          <div className="wrapper">
            <div className="home__top">
              <h1 className="home__title">AUTHENTIC ITALIAN FOOD <br/> YOU CAN’T REFUSE.</h1>
                <p className="home__subtitle">NOTHING PERSONAL. <br/> IT’S JUST BUSINESS. </p>
                <div className="home__fview">View menu </div>
            </div>
            <div className="home__content">
              <div className="home__content-reserv">
                <h2 className="home__content-title title">Who are we?</h2>
                  <p className="home__content-subtitle">We are a hole-in-the-wall that serves authentic italian food 
                  that you simply can’t refuse. <br/>If you can find us, we will treat you like family: with 
                  the utmost respect. No one leaves hungry at Buco Muro. <br/>If you choose to stick around until later in 
                  the night, you may just learn our secrets. In return we ask one favor: honor omerta. Interested in 
                  joining the family? Reserve your spot below.</p>
                    <div className="home__content-freserv ">make reservation</div>
              </div>
            </div>
           
     
            <div className="home__make">
            <img className="home__make-img" src={pasta} alt="pasta" />
            <div className="home__make-wrapper ">
         
            <div className="home__make-reserv home__content-reserv">
                <h2 className="home__make-title title">build your pasta</h2>
                  <p className="home__make-subtitle subtitle"> We are proud to offer a menu that allows each guest to build their
                   own pasta from the ground up. Choose your sauce, pasta, and protein. We are pleased to
                    make the dish of your dreams. <br/> All of our food is fresh; imported from family and friends in Sicily, Italy. <br/>Enjoy. </p>
                    <div className="home__make-fmenu buttonx">Menu</div>
              </div>
            </div>
            </div>
            <div className="home__code">
              <div className="home__code-container container">
                  <h2 className="home__code-title title">Family code:</h2>
                  <p className="home__code-subtitle title">COSA NOSTRA</p>
                  <h3 className="home__code-subtitle-last subtitle">Nothing personal. <br/>It's just a secret. </h3>
                  
              </div>
            </div>
          
            
          </div>
        </div>
    )
}

export default Home;