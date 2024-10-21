import React, {useContext} from 'react';
import {Youtube} from '../Youtube'
import { Carousel } from "flowbite-react";
const Banner = () => {
  let {selected} = useContext(Youtube)

  console.log(selected)
    
  return ( 

 
    <>


    {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      
      <Carousel>
        {selected.map((x) => (
           <img className='' src={x.snippet.thumbnails.high.url} alt="..." />
        ))}
       
      
      </Carousel>
    </div> */}

    </>
  )
}

export default Banner