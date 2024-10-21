import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import YoutubeApi from './Youtube';
import List from './components/List';
import Banner from './components/Banner';
import Form from './components/Form';


function App() {


  return (
  <>
   
   <YoutubeApi>
    <Form />
    <Banner/>
    <List/>
   </YoutubeApi>
  </>
  ); 
}

export default App;
