import React, { useContext, useEffect } from 'react'
import {Youtube} from '../Youtube'
import Item from './Item'


//let url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=terminator&key=AIzaSyD8PtGw7UNYhfOGaYrzITtYoPcES3hN7iY';

const List = () => {
  const { movie, setMovie, setSelected, mysearch, setMySearch } = useContext(Youtube);
  return (
    <div className='flex flex-wrap justify-center'>
      {movie.map((x, num) => (
        <Item key={num++} tunde={x}  
        />
      ))}
    </div>
  )
}

export default List