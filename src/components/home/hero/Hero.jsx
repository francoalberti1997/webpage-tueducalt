import React from 'react'
import "../hero/hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
            <div className="row">
                <div className='row-container'>
                <h1>
                    Welcome To Our Community
                </h1>
                <h2>
                    Best English Courses
                </h2>
                <p>
                Nuestros Cursos Conversacionales son la clave para mejorar tus habilidades en inglés de manera práctica y dinámica. Nos enfocamos en la comunicación oral, brindándote la confianza necesaria para hablar en situaciones reales. Nuestros instructores altamente calificados te guiarán en un viaje de aprendizaje único, donde te sumergirás en conversaciones auténticas y adquirirás fluidez en inglés. Únete a nosotros y comienza a hablar inglés con confianza.
                </p>
                </div>
                
            <div className="button">
                <button className='primary-btn'>
                <a class="whats-app" href="https://wa.me/+541166391419?text=¡Hola! Me gustaría obtener más información." target="" id="wsp">Coordinar Clase de Prueba</a><i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button className='secondary-btn'>
                    <a href="/cursos">Ver Cursos</a> <i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
            </div>
        </div>
      </section>
      <div className="margin">

      </div>
    </>
  )
}

export default Hero
