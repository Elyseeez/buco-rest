import React from 'react';


function Reservation () { 
    return ( 
        <div className="reservation">
            <div className="reservation__wrapper">
                <h2 className="reservation__title">RESERVE YOUR SEAT HERE.</h2>
                    <div className="reservation__form">
                        <div className="reservation__form-wrapper">
                            <div>
                    <label className="reservation__size">
                        <p>PARTY SIZE:</p> 
                         <input type="text" name="PARTY SIZE" />
                         </label>
                         </div>
                         <div>
                         <label className="reservation__date">
                        <p>DATE:</p>
                         <input type="date" name="PARTY SIZE" />
                         </label>
                         </div>
                         <div className="reservation__button-d">
                        <input className="reservation__button" type="submit" value="Submit" />
                        </div>
                        </div>
                    </div>
                <div className="reservation__botom">
                    <p className="reservation__bottom-subtitle">open daily from 18:00</p>
                    <h2 className="reservation__bottom-title">1520 cosa nostra <br/>new york</h2>
                </div>
            </div>

        </div>
    )
}


export default Reservation;