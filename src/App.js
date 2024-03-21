import './App.css';
import React from 'react';
import Footer from './components/Footer';
import UpperBar from './components/Header';
import Body from './components/Body';

const App = ()=>{
  return(
    <div className='App'>
      <UpperBar/>
      <Body/>
      <Footer/>
    </div>
  );
};



export default App;
