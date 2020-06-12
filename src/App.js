import React from 'react';
import './App.css';
import Carousel from './components/Carousel'
import Header from './components/Header'
import Products from './components/Products'
import XboxGamePass from './components/XboxGamePass'
import ForWork from './components/ForWork'
import SocialMediaPresence from './components/SocialMediaPresence'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Carousel />
      <Products />
      <XboxGamePass />
      <ForWork />
      <SocialMediaPresence />
      <Footer />
    </div>
  );
}

export default App;
