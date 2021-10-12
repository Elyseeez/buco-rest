import React from 'react';


function Story () { 
    return ( 
        <div className="story"> 
            <div className="story__wrapper">
               <div className="story__top">
            <h2 className="story__title title">Our Story</h2>
              <p className="story__subtitle subtitle">Family first. <br/> Food Second.</p>
              <div className="story__learn buttonx">Learn more</div>
              </div> 
              <div className="story__content">
                  <div className="story__content-wrapper">
                  <h2 className="story__content-title title">Who are we?</h2>
                  <p className="story__content-text">We are a hole-in-the-wall that serves authentic italian food that you simply can’t refuse.<br/> If you can find us, we will treat you like family: with the utmost respect. No one leaves hungry at Buco Muro.<br/> If you choose to stick around until later in the night, you may just learn our secrets. In return we ask one favor: honor omerta. Interested in joining the family? Reserve your spot below.</p>
                  <div className="story__content-freserv">Make reservation</div>
                  </div>
              </div>
              <div className="story__bottom">
              <h2 className="story__bottom-title title">Family code:</h2>
                  <p className="story__bottom-subtitle title">COSA NOSTRA</p>
                  <h3 className="story__bottom-subtitle-last subtitle">Nothing personal. <br/>It's just a secret. </h3>
              </div>
            </div>
            </div>

    )
}


export default Story;