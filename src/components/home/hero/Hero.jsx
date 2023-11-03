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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic debitis, sapiente quod, numquam praesentium similique eligendi nisi asperiores delectus reiciendis, in culpa nihil iure! Commodi architecto ea delectus officia voluptate?
                </p>
                </div>
            <div className="button">
                <button className='primary-btn'>
                    Get Started <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button className='secondary-btn'>
                    View Courses <i className='fa fa-long-arrow-alt-right'></i>
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
