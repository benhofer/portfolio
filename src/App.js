import React from 'react';
import './App.css';
import { ABOUT, WORK, TESTIMONIALS } from './content';
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
              <a href="#about-me" className="navbar-item">
                About Me
              </a>

              <a href="#work" className="navbar-item">
                Work
              </a>

              <a href="#testimonials" className="navbar-item">
                Testimonials
              </a>

            </div>
          </div>
        </nav>

        <section className="hero" id="about-me">
          <div className="hero-body p-6">
            <div className="container columns">
              <div className="column is-one-quarter">
                <img src={ben} className='portrait' alt="Portrait" />
              </div>
              <div className="column pt-6">
                  <div>
                    { ABOUT.title }
                    { ABOUT.text }
                    <section className="links py-4">
                      { ABOUT.links.map(link => link)}
                    </section>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section" id="work">
          <h1 className="title">Work</h1>
          {
            WORK.map(p => 
              <div className="section">
                <div className="is-size-4">{p.title}</div>
                <p>{p.description}</p>
                {p.images.map(i => 
                  <img src={i.src} alt={i.alt} width={i.size} /> 
                )}
              </div>
            )
          }
        </section>

        <section className="section" id="testimonials">
          <h1 className="title">Testimonials</h1>
          <p>You don't have to take my word for it. Here is what some of my colleagues have written about working with me. Find more on my <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer" target="_blank">LinkedIn profile</a>.</p>
          {
            TESTIMONIALS.map(t => 
              <div className="section">
                <h2 className="is-size-5">
                  {t.text}
                </h2>
                <p><strong>{t.colleague}, {t.title}, {t.organization}</strong></p>
              </div>
            
            )}
        </section>
        
      
      </div>
      <footer className="footer">
        <section className="links container p-6">
            <a href="http://twitter.com/benhofer" rel="noreferrer" target="_blank">Twitter</a>
            <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer" target="_blank">LinkedIn</a>
            <a href="http://github.com/benhofer" rel="noreferrer" target="_blank">Github</a>
            <a href="mailto:ben dot hofer at gmail dot com" rel="noreferrer" target="_blank">Email</a>
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
