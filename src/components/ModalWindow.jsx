import React from 'react'
import modalCloseButton from "../assets/icons/modal_close_button.svg"

function ModalWindow({ active, modalWindowClosed, pet }) {
   return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => modalWindowClosed()}>
         <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>

            <img className='close-button' src={modalCloseButton} onClick={() => modalWindowClosed()} alt="Close button" />
            <div className='modal__content__img'>
               <img src={pet.img} alt="animal img" />
            </div>
            <div className='modal__content__desc'>
               <h3 className='title-h3'>{pet.name}</h3>
               <h4 className='title-h4'>{pet.breed}</h4>
               <h5 className='title-h5'>{pet.description}</h5>
               <ul>
                  <li ><span className='title-h5'><span>Age: </span>{pet.age}</span></li>
                  <li ><span className='title-h5'><span>Inoculations: </span>{pet.inoculations}</span></li>
                  <li ><span className='title-h5'><span>Diseases: </span>{pet.diseases}</span></li>
                  <li ><span className='title-h5'><span>Parasites: </span>{pet.parasites}</span></li>
               </ul>
            </div>


         </div>
      </div >
   )
}

export default ModalWindow