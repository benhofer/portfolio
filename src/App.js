import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <About />
        <div className="container">
          <Portfolio />
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
