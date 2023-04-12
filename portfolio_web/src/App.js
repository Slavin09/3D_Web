import React from 'react'
import './App.css'
import Header from './components/Header'
import Parent from './components/Parent';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

function App() {
useEffect(() => {
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
}, []);

  return (
    <div data-scroll-container className="App">
      <Header/>
        <Parent/>
    </div>
  );
}

export default App;


