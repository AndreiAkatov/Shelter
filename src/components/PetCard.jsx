import React from 'react'

function PetCard({ modalWindowActive, name, img, index }) {
   return (
      <div className='pet-card'>
         <div className='card__img'>
            <img src={img} alt="pet img" />
         </div>
         <p className='card__title'>{name}</p>
         <button onClick={() => modalWindowActive(index)} className='card__btn'>Learn more</button>
      </div>
   )
}

export default PetCard