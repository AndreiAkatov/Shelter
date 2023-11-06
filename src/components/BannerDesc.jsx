import React from 'react'
import { Link } from "react-router-dom";

function BannerDesc() {
   return (
      <div className='banner-desc'>
         <div className='banner-desc__box1'>
            <h2 className='title-h2'>Not only people need a house</h2>
            <p className='desc-1'>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
            <Link to='/contacts'>
               <button className='btn-1'>Make a friend</button>
            </Link>
         </div>
         <div className='banner-desc__box2'>
         </div>

      </div>
   )
}

export default BannerDesc