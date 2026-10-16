import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import UXAbout from './components/ux-about';
import Portfolio from './components/portfolio';
import UXPortfolio from './components/ux-portfolio';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => { 
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };   
    // Listen for back/forward browser navigation clicks
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <div>
      <div className="main-container">
        <Header />
        {currentPath !== '/uiux' &&
          <About />
        }{
          currentPath === '/uiux' &&
          <UXAbout />
        }
        <div className="container">
            {
              currentPath !== '/uiux' &&
              <Portfolio />
            }{
              currentPath === '/uiux' &&
              <UXPortfolio />
            }
            <Testimonials />
          </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
