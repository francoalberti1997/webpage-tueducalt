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
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-youtube icon"></i>
            </div>
            </div>

        </section>
    </div>
  )
}

export default Head
