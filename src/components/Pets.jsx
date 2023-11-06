import React, { useEffect, useState } from 'react'
import PetCard from './PetCard';
import ModalWindow from './ModalWindow';
import { getInfo } from '../getInfo/getInfo';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules';
import { SwiperNavBtns } from './SwiperNavBtns';


function Pets() {
   const [modalActive, setModalActive] = useState(false);
   const [indexButtonActive, setIndexButtonActive] = useState(0);

   const [petsList, setPetsList] = useState([]);

   useEffect(() => {

      const fetchInfo = async () => {
         try {
            const response = await getInfo();
            setPetsList(response);
         } catch (error) {
            console.log(error)
         }
      }
      fetchInfo();
   }, [])

   const modalWindowActive = (index) => {
      setModalActive(true);
      setIndexButtonActive(index);
      document.body.classList.add('lock')
   }

   const modalWindowClosed = () => {
      setModalActive(false);
      document.body.classList.remove('lock')
   }


   return (
      <>
         <section className='pets'>
            <div className='wrapper'>
               <h3 className="title-h3">Our friends who <br />
                  are looking for a house</h3>
               <div className='cards'>
                  <Swiper
                     modules={[Autoplay, A11y, Navigation, Pagination]}
                     spaceBetween={0}
                     slidesPerView={3}
                     autoplay={{
                        paused: false,
                        delay: 0,
                        disableOnInteraction: false,
                     }}
                     speed={3000}
                     breakpoints={{
                        300: {
                           slidesPerView: 1,
                        },
                        640: {
                           slidesPerView: 1,
                        },
                        768: {
                           slidesPerView: 2,
                        },
                        1150: {
                           slidesPerView: 3,
                        },
                     }}
                     // onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                  >
                     {petsList.map((card, index) => {
                        return <SwiperSlide key={card.id} className='slide'>
                           <PetCard name={card.name} img={card.img} modalWindowActive={modalWindowActive} index={index} />
                        </SwiperSlide>
                     })}

                     <SwiperNavBtns />
                  </Swiper>
               </div>
               <Link to='/ourpets'>
                  <button className='btn-1'>Get to know the rest</button>
               </Link>
            </div>
            {petsList.filter((card, index) => {
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

         </section >
      </>
   )
}

export default Pets