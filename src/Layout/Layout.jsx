import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Layout() {
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />

         {/* <section className="banner">
            <div className="wrapper">
               <Header />
               <BannerDesc />
            </div>
         </section>
         <div className="wrapper">
            <About />
         </div>
         <OurPetsPage />
         <Pets />
         <div className="wrapper">
            <HelpUs />
         </div>
         <Donation />
         <Footer /> */}
      </>
   );
}

export default Layout;
