import React from 'react'
import x from '../assests/foodapp.jpg'
import './banner.css'




const Banner = () => {
  return (
    <div className='banner'>
            <div style={{width:'100px', height:'100px'}}>
            <img style={{width:'100%', height:'100%'}} src={x} alt="" />
          
            </div>
    </div>
  )
}

export default Banner