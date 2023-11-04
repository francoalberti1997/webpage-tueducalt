import React from 'react'
import "../about/about.css"
import img1 from "../about/pregrabado.jpg"
import img2 from "../about/picture.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className='heading'>
            <h1>
                ABOUT US
            </h1>
            <p>
                Tu Educación Alternativa
            </p>
        </div>
        <div className="container">
            <section className='container-about'>
               
                <div className="about-content">
                    <h2>
                        Somos una Comunidad de Amantes del idioma inglés. Nuestra misión es transmitir la lengua inglesa desde un enfoque práctico.
                    </h2>
                    <p>
                        Contamos con 5 años en el rubro. Somos una comunidad online que ofrece los mejores cursos de inglés.
                        Todos los niveles y edades. 
                    </p>
                    <div className='about-img'>
                    <img src={img2} alt="" />
                        <h2>CEO</h2>
                        <h3>Franco Alberti</h3>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About
