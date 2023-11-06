import React from "react";
import iconEmail from "../assets/icons/icon-email.svg";
import iconPhone from "../assets/icons/icon-phone.svg";
import iconMarker from "../assets/icons/icon-marker.svg";

function Footer() {
   return (
      <footer className="footer">
         <div className="wrapper">
            <div className="footer__inner">
               <div className="footer__column footer__column--first">
                  <h3 className="footer__title">For questions and suggestions</h3>
                  <ul className="footer__list">
                     <li className="footer__item">
                        <div className="footer__item-icon">
                           <img src={iconEmail} alt="email" />
                        </div>
                        <a href="mailto:email@shelter.com">email@shelter.com</a>
                     </li>
                     <li className="footer__item">
                        <div className="footer__item-icon">
                           <img src={iconPhone} alt="phone" />
                        </div>
                        <a href="phone:+13 674 567 75 54">+13 674 567 75 54</a>
                     </li>
                  </ul>
               </div>
               <div className="footer__column footer__column--second">
                  <h3 className="footer__title">We are waiting for your visit</h3>
                  <ul className="footer__list">
                     <li className="footer__item">
                        <div className="footer__item-icon">
                           <img src={iconMarker} alt="phone" />
                        </div>
                        <div className="footer__text">1 Central Street, Boston (entrance from the store)</div>
                     </li>
                     <li className="footer__item">
                        <div className="footer__item-icon">
                           <img src={iconMarker} alt="phone" />
                        </div>
                        <div className="footer__text">18 South Park, London</div>
                     </li>
                  </ul>
               </div>
               <div className="footer__image"></div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
