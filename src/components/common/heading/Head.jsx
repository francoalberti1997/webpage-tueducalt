import React from 'react'
import img1 from "../heading/logo.jpg"

const Head = () => {
  return (
    <div>
        <section className='head'>
            <div className="container flexSB flex">
             
                <div className="logo">
                    <h1>Tu Educación Alternativa</h1>
                    <span>Online English Courses</span>
                </div>
   
            <div className="social">
                <a href="https://www.facebook.com/ALTEDUC/"><i className="fab fa-facebook-f icon"></i></a>
                <a href="https://www.instagram.com/educ.alt/"><i className="fab fa-instagram icon"></i></a>
                <a class="whats-app" href="https://wa.me/+541166391419?text=¡Hola! Me gustaría obtener más información." target="" id="wsp"><i className="fab fa-whatsapp icon"></i></a>
            </div>
            </div>

        </section>
    </div>
  )
}

export default Head
