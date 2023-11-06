import React from 'react'
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import { useSwiper } from 'swiper/react'

export const SwiperNavBtns = () => {
   const swiper = useSwiper();
   return (
      <div className='swiper-nav-btns'>
         <div onClick={() => swiper.slidePrev()} className='btn-left'>

            <img src={arrowLeft} alt="arrow" />
         </div>
         <div onClick={() => swiper.slideNext()} className='btn-right'>

            <img src={arrowRight} alt="arrow" />
         </div>
      </div>
   )
}
