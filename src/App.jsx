import { useState, useEffect } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
function App() {
  useEffect(() => {
    document.title = "Rajanikanta Biswal";
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
  }, []);
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
