import React, { useState, useEffect } from "react";
import PetCard from '../components/PetCard';
import ModalWindow from '../components/ModalWindow';
import Pagination from "../components/Pagination";


function OurPetsPage() {
   const [modalActive, setModalActive] = useState(false);
   const [indexButtonActive, setIndexButtonActive] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const [cardsQuantity, setCardsQuantity] = useState(8);
   const [paginationPages, setPaginationPages] = useState(1);


   const [pets, setPets] = useState([])
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const checkWindowWidth = () => {
      if (windowWidth >= 769) {
         setCardsQuantity(8)
         setPaginationPages(1)
      } else if ((windowWidth <= 768) && (windowWidth > 501)) {
         setCardsQuantity(6)
         setPaginationPages(2)
      } else if (windowWidth <= 501) {
         setCardsQuantity(3)
         setPaginationPages(3)
      }
   }


   useEffect(() => {
      checkWindowWidth()
      fetch(
         `http://localhost:3001/pets?_page=${currentPage}&_limit=${cardsQuantity}`,
      )
         .then((res) => res.json())
         .then((arr) => {
            setPets(arr);
         });
      window.scrollTo(0, 0);
   }, [currentPage, cardsQuantity, windowWidth])

   const modalWindowActive = (index) => {
      setModalActive(true);
      setIndexButtonActive(index);
      document.body.classList.add('lock')
   }

   const modalWindowClosed = () => {
      setModalActive(false);
      document.body.classList.remove('lock')
   }


   const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
      checkWindowWidth()
   };


   useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [windowWidth]);


   return (
      <section className="our-pets-page">
         <div className="wrapper">
            <h3 className="title-h3">Our friends who
               are looking for a house</h3>
            <div className='cards'>
               {pets.map((card, index) => {
                  return <PetCard
                     key={card.id}
                     name={card.name}
                     img={card.img}
                     modalWindowActive={modalWindowActive}
                     index={index} />
               })}
            </div>
            <Pagination
               onChangePage={(number) => setCurrentPage(number)}
               paginationPages={paginationPages}
            />
         </div>
         {pets.filter((card, index) => {
            return (index === indexButtonActive)
         }).map((pet, index) => {
            return <ModalWindow
               key={pet.id}
               pet={pet}
               active={modalActive}
               setActive={setModalActive}
               modalWindowClosed={modalWindowClosed}
            />
         })}
      </section>
   );
}

export default OurPetsPage;
