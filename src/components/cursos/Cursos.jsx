import React from 'react'
import "../cursos/cursos.css"
import Modal from '../cursos/Modals'

import kids from "../cursos/kids.jpg"
import b1 from "../cursos/b1.jpg"
import a2 from "../cursos/a2.png"
import conv from "../cursos/INGLES-CONVERSACIONAL.jpg"
import premium from "../cursos/premium.avif"





const Cursos = () => {
  return (
        <div>
        <h2 class="text-4xl font-semibold text-center text-gray-100 uppercase tracking-wider my-5">
            CURSOS
        </h2>
        <div className='cursos-modal flex justify-center flex-wrap h-full items-center gap-20 py-10'>
            <Modal imagen={a2} titulo="Curso Basico" campo = "Inglés" nombre="Curso desde 0 hasta alcanzar nivel A2"/>
            <Modal imagen={b1} titulo="Curso Intermedio" campo = "Inglés" nombre="Curso de transición A2-B1"/>
            <Modal imagen={conv} titulo="Curso Conversacional" campo = "Inglés" nombre="Curso Conversacional. Adquirir mayor fluidez y mejorar pronunciación."/>
            <Modal imagen={kids} titulo="Curso Kids" campo = "Inglés" nombre="Curso para Kids con dinámica conversacional"/>
            <Modal imagen={premium} titulo="Curso Personalizado" campo = "Inglés" nombre="Clases individuales y objetivos ajustados a tus necesidades."/>
        </div>
        </div>
      
  )
}



export default Cursos
