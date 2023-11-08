import React, { useEffect, useState } from "react";
import img1 from '../about/liberty.jpg'
import img2 from '../about/liberty.jpg'
import "../cursos/cursos.css"


export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const html = document.documentElement;

  // Agregar o eliminar la clase 'active-modal' en el elemento raíz
  if (modal) {
    html.style.overflowY = 'hidden';
  } else {
    html.style.overflowY = 'auto';
  }

  return (
    <>
   <div className='bg-[#131313] text-center shadow-lg p-6 md:p-10 rounded-xl mx-4 md:mx-0 md:w-1/3 my-4 md:my-8 flex flex-col items-center cursor-pointer hover:bg-blue-100 transition-color-transition-duration-900 ' onClick={toggleModal}>
      <div className='h-48 w-48 md:h-60 md:w-60'>
          <img src={props.imagen} alt="no cargo" className='py-3 md:py-6' style={{ width: '100%', height: '100%' }} />
      </div>
      <h3 className='text-lg md:text-xl'>
          {props.titulo}
      </h3>
  </div>

      {modal && (
        <div className="modal z-50 relative">
          <div onClick={toggleModal} className="overlay"></div>

          <div className="modal-content">

                <div className="modal-content-div">
                <h2>{props.campo}</h2>
                <p>
                    {/* aca ingresar el titulo de la imagen */}
                {props.nombre}
                </p>
                    {/* aca ingresar la imagen */}
                <img src={props.imagen} alt="no cargo" className='py-6' style={{ width: '300px', height: '300px' }} />
                </div>
            
      
            <button className="close-modal bg-blue-100 rounded-lg p-5" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}