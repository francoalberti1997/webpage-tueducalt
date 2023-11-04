import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import "../back/back.css"

const Back = ({title}) => {

    const location = useLocation()

  return (
    <>
      <section className='back text-center'>
        <h2 className=''>
            Home / {location.pathname.split("/")[1]}
        </h2>
        <h1 className=''>
            {title}
        </h1>
      </section>
      <div className="marigin">

      </div>
    </>
  )
}

export default Back
