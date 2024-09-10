import React from 'react'

const Menu = () => {
  return (
    <div>
           <ul style={{display:'flex', listStyle:'none'}}>
                    <li><a style={{color:'white', fontSize:'17px', marginRight:'20px'}} href="">Home </a></li>
                    <li><a style={{color:'white', fontSize:'17px', marginRight:'20px'}} href="tel:2348165717300">Call </a></li>
                    <li><a style={{color:'white', fontSize:'17px', marginRight:'20px'}} href="https://wa.me/2348165717300">Whatsapp</a></li>
                    <li><a style={{color:'white', fontSize:'17px', marginRight:'20px'}} href="sms:2348165717300">SMS</a></li>
                    <li><a style={{color:'white', fontSize:'17px', marginRight:'20px'}} href="mailto:ababatunde022@yahoo.com">Email</a></li>
                    <li><a style={{color:'white', fontSize:'17px', marginRight:'20px'}} href="">Home </a></li>
                    <li><a style={{color:'white', fontSize:'17px', marginRight:'20px'}} href="">Home </a></li>
                </ul>
    </div>
  )
}

export default Menu