import './scss/app.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import OurPetsPage from './pages/OurPetsPage';
import HelpUs from './pages/HelpUs';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/ourpets" element={<OurPetsPage />}></Route>
            <Route path="/helpus" element={<HelpUs />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
         </Route>
      </Routes>
   );
}

export default App;
