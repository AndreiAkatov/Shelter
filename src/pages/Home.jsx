import React from "react";

import BannerDesc from "../components/BannerDesc";
import About from "../components/About";
import HelpUs from "../components/HelpUs";
import Donation from "../components/Donation";
import Pets from "../components/Pets";

function Home() {
   return (
      <>
         <section className="banner">
            <div className="wrapper">
               <BannerDesc />
            </div>
         </section>
         <div className="wrapper">
            <About />
         </div>
         <Pets />
         <div className="wrapper">
            <HelpUs />
         </div>
         <Donation />
      </>
   );
}

export default Home;
