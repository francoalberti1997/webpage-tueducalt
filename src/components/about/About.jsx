import React from 'react'
import img1 from "../about/picture.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {FaHourglassStart} from "react-icons/fa6"
import "../about/about.css"

const About = () => {
  return (
    <section id='about' className='bg-black'>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={img1} alt="" />
                    <p className='titulo-img'>CEO</p>
                </div>
            </div>

            <div className="about__content">
                <h2>Conocenos</h2>
                <h1>Sobre Nosotros</h1>
                <div className="about__cards">
                    <article className='about__card py-8 px-3'> 
                    <FaAward className="about__icon"/>
                        <h5>Experiencia</h5>
                        <small className='bg-white'>3+ Años de Experiencia en el rubro</small>
                    </article>

                    <article className='about__card py-8 px-3'> 
                    <FiUsers className="about__icon"/>
                        <h5>Estudiantes</h5>
                        <small className='bg-white'>Más de 1000 estudiantes</small>
                    </article>

                    <article className='about__card py-8 px-3'> 
                    <FaHourglassStart className="about__icon" id='ultimo'/>
                        <h5>Eficiencia</h5>
                        <small className='bg-white'>Resultados sólidos en poco tiempo</small>
                    </article>
                </div>

                <p>Somos una empresa de enseñanza de inglés con más de tres años de experiencia ofreciendo cursos en línea. Nos destacamos por un enfoque conversacional, personalizado y precios accesibles. Creemos en hacer el aprendizaje del inglés agradable y significativo, poniendo especial énfasis en la comunicación real. Nos alejamos de clases muy teóricas y centradas solo en la gramática para brindarte una experiencia práctica y conversacional. Queremos que todos tengan acceso a una educación de calidad, por lo que ofrecemos cursos adaptados a tu ritmo y presupuesto.</p>
                <a href="https://wa.me/+541166391419?text=¡Hola! Me gustaría obtener más información." className='primary-btn'>Hablemos!</a>
            </div>
        </div>
    </section>
  )
}

export default About
