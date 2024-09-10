import React from 'react'
import Menu from '../Menu';
import styled from 'styled-components'

const Navbar = () => {
  return (
    <div>
        <Daniel>
            <div>
               <h1 style={{color:'white'}}>FoodApp</h1>
            </div>

            <div>
             <Menu />
            </div>


            <div>
                <main style={{backgroundColor:'gray', padding:'6px', borderRadius:'5px', width:'250px', height:'40px'}}>
                    <input  style={{border:'none', outline:'none', width:'100%', height:'100%',backgroundColor:'gray'}} type="text" placeholder='Search' />
                </main> 
            </div>
        </Daniel>
    </div>
  )
}

const Daniel = styled.header`
background-color: black;
width:100%;
height:70px;
display:flex;
align-items:center;
justify-content:space-between;
padding:10px 50px;

`

export default Navbar