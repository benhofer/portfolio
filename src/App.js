import React from 'react';
import './App.css';
import ben from './img/ben.jpg'

function App() {
  return (
    <div>
      <div className="container main-container">
        
        <nav className="navbar py-4" role="navigation" aria-label="main navigation">
          <h1 className="navbar-brand is-size-4">
            <a className="navbar-item" href="/">
              <b>BEN HOFER</b>
            </a>
          </h1>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item">
                About Me
              </a>

              <a className="navbar-item">
                Work
              </a>

              <a className="navbar-item">
                Testimonials
              </a>

            </div>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-body p-6">
            <div className="container columns">
              <div className="column is-one-quarter">
                <img src={ben} className='portrait' alt="Portrait" />
              </div>
              <div className="column pt-6">
                  <div>
                    <h1 className="title">
                      I'm a Front-End Developer specializing in ReactJS
                    </h1>
                    <h2 className="subtitle">
                      I’ve been at this game for over 10 years, creating User Interfaces for government clients at <a href="https://www.publicissapient.com/industries/public-sector" rel="noreferrer" target="_blank">Sapient</a> and in the private sector for <a href="https://www.wealthengine.com" rel="noreferrer" target="_blank">WealthEngine</a> and <a href="https://www.keycaliber.com" rel="noreferrer" target="_blank">KeyCaliber</a>. I have seen the industry go through a myriad of changes. My experience, grit, and hunger to learn new technologies keep me alert and motivated. 
                      <br /><br />When I’m not coding, I love running, <a href="https://benhofer.bandcamp.com" rel="noreferrer" target="_blank">playing music</a>, and legos with my kids on our dining room table.
                    </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      
      </div>
      <footer className="footer">
        <section className="links container p-6">
            <a href="http://twitter.com/benhofer" rel="noreferrer" target="_blank">Twitter</a>
            <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer" target="_blank">LinkedIn</a>
            <a href="http://github.com/benhofer" rel="noreferrer" target="_blank">Github</a>
            <a href="mailto:benhofer@gmail.com" rel="noreferrer" target="_blank">Email</a>
        </section>
        <div className="content has-text-centered">
          <p>
            &copy; Copyright 2021 Ben Hofer
          </p>
        </div>
      </footer>     
   </div>
  );
}

export default App;
