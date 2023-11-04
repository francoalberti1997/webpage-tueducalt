import React, { useState } from 'react'
import Head from './Head'
import "../heading/header.css"
import {Link} from "react-router-dom"

const Header = () => {

  const [click, setClick] = useState(false)


  return (
    <div className='header'>
      <Head/>
        <nav className='flexSB my-10'>
          <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/courses">All Courses</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="/Contact">Contact</Link></li>
          </ul>

          <div className='container-menu'>
            <div className="start">
              <div className="button">
                  GET CERTIFICATE
              </div>
            </div>

            <button className='toggle' onClick={() => setClick(!click)}>
                {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>} 
            </button>
          </div>
          
        </nav>
    </div>
  )
}

export default Header
