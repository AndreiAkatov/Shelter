import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
   const [menu_class, setMenuClass] = useState('menu hidden');
   const [isMenuClicked, setisMenuClicked] = useState(false);

   const updateMenu = () => {
      if (!isMenuClicked) {
         setBurgerClass('burger-bar clicked');
         setMenuClass('menu visible');
         document.body.classList.add('lock')
      } else {
         setBurgerClass('burger-bar unclicked');
         setMenuClass('menu hidden');
         document.body.classList.remove('lock')
      }
      setisMenuClicked(!isMenuClicked);
   };

   return (
      <div className="header-wrapper">

         <header className="header">
            <Link to="/">
               <div className="logo">
                  <h2>Cozy House</h2>
                  <p>Shelter for pets in Boston</p>
               </div>
            </Link>

            <div className="navigation">
               <div className="burger-menu" onClick={updateMenu}>
                  <span className={burger_class} ></span>
                  <span className={burger_class} ></span>
                  <span className={burger_class} ></span>
               </div>
               <div className={menu_class}>
                  <ul>
                     <li>
                        <Link to="/">About the shelter</Link>
                     </li>
                     <li>
                        <Link to="/ourpets">Our pets</Link>
                     </li>
                     <li>
                        <Link to="/helpus">Help the shelter</Link>
                     </li>
                     <li>
                        <Link to="/contacts">Contacts</Link>
                     </li>
                  </ul>
               </div>

            </div>
         </header>
      </div>

   );
}

export default Header;
