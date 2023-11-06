import React from "react";
import creditCard from "../assets/icons/credit-card.svg";

function Donation() {
   return (
      <section className="donation">
         <div className="wrapper">
            <div className="donation__img">
            </div>
            <div className="donation__desc">
               <h3 className="title-h3">You can also make a donation</h3>
               <p className="desc-1">Name of the bank / Type of bank account</p>
               <div className="card">
                  <div className="card__img">
                     <img src={creditCard} alt="Credit card" />
                  </div>
                  <span className="title-h4">8380 2880 8028 8791 7435</span>
               </div>
               <p className="desc-2">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
         </div>
      </section>
   );
}

export default Donation;
