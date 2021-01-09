import React, {useState} from 'react';
import './App.css';
import { ABOUT, WORK, TESTIMONIALS } from './content';
import ben from './img/ben.jpg'
import { Icon } from '@iconify/react';
import quote from '@iconify/icons-bx/bxs-quote-alt-left';

function App() {
  const [menu, setMenu] = useState(false);

  const handleSetMenu = () => {
    let m = menu;
    setMenu(!m);
  }

  return (
    <div>
      <div className="container main-container">
        <div className="nav-container">
          <nav className="navbar container py-4" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <h1 className="is-size-4">
                <a className="navbar-item" href="/">
                  <b>BEN HOFER</b>
                </a>
              </h1>
              <a role="button" class={"navbar-burger" + " " + (menu && 'is-active')} onClick={handleSetMenu} aria-label="menu" aria-expanded={menu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarBasicExample" className={"navbar-menu " + (menu && 'is-active')}>
              <div className="navbar-end">
                <a href="#about-me" className="navbar-item" onClick={handleSetMenu}>
                  About Me
                </a>
                <a href="#work" className="navbar-item" onClick={handleSetMenu}>
                  Work
                </a>
                <a href="#testimonials" className="navbar-item" onClick={handleSetMenu}>
                  Testimonials
                </a>
              </div>
            </div>
          </nav>
        </div>

        <section className="hero section" id="about-me">
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
                      { ABOUT.links.map((link,i) => <span key={'link-'+i}>{link}</span>)}
                    </section>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section" id="work">
          <h1 className="title has-text-centered">Work</h1>
          {
            WORK.map((p,i) => 
              <div className="sub-section" key={'work-' + i}>
                <h2 className="is-size-4">
                  {p.title} &nbsp;
                  {p.link && 
                  <small style={{fontSize: '13px'}}><a href={p.link} rel="noreferrer" target="_blank">View App ></a></small>
                  }
                </h2>
                <p>{p.description}</p>
                
                {p.images.map(i => 
                  <img src={i.src} alt={i.alt} width={i.size} /> 
                )}
                <ul className="technologies">
                  {p.technologies.map((t,i) => 
                    <li key={'tech-'+i}><b>{t}</b></li>
                  )}
                </ul>
              </div>
            )
          }
        </section>

        <section className="section" id="testimonials">
          <h1 className="title has-text-centered">Testimonials</h1>
          <p>You don't have to take my word for it. Here is what some of my colleagues have written about working with me. Find more on my <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer" target="_blank">LinkedIn profile</a>.</p>
          {
            TESTIMONIALS.map((t,i) => 
              <div key={'testimonial-' + i} className="sub-section mb-6">
                <Icon icon={quote} width="62px" style={{color: 'gray'}} /> 
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
          { ABOUT.links.map((link,i) => <span key={'link-'+i}>{link}</span>)}
        </section>
        <div className="content has-text-centered p-3">
          <p>
            &copy; Copyright 2021 Ben Hofer
          </p>
        </div>
      </footer>     
   </div>
  );
}

export default App;
