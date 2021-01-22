import React, {useState, Fragment} from 'react';
import './App.css';
import { ABOUT, WORK, TESTIMONIALS } from './content';
import ben from './img/lego-ben.png';
import HeroImg from './hero-img';
import { Icon } from '@iconify/react';
import quote from '@iconify/icons-bx/bxs-quote-alt-left';
import check from '@iconify/icons-mdi/check';
import downArrow from '@iconify/icons-mdi/arrow-down-drop-circle';
import rightArrow from '@iconify/icons-mdi/arrow-right-drop-circle';

function App() {
  const [menu, setMenu] = useState(false);

  const handleSetMenu = () => {
    let m = menu;
    setMenu(!m);
  }

  return (
    <div>
      <div className="main-container">
        <div className="nav-container">
          <nav className="navbar container px-3 py-4" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <h1 className="is-size-4">
                <a className="navbar-item is-uppercase" href="/">
                  Ben Hofer
                </a>
              </h1>
              <div role="button" className={"navbar-burger" + " " + (menu && 'is-active')} onClick={handleSetMenu} aria-label="menu" aria-expanded={menu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </div>
            </div>
            <div id="navbarBasicExample" className={"navbar-menu " + (menu && 'is-active')}>
              <div className="navbar-end">
                <a href="#about-me" className="navbar-item" onClick={handleSetMenu}>
                  About Me
                </a>
                <a href="#portfolio" className="navbar-item" onClick={handleSetMenu}>
                  Portfolio
                </a>
                <a href="#testimonials" className="navbar-item" onClick={handleSetMenu}>
                  Testimonials
                </a>
              </div>
            </div>
          </nav>
        </div>

        <section className="section" id="about-me">
          <div className="hero">
            <div className="hero-bg"></div>
            <div className="hero-body p-6">
              <div className="container px-5 pt-6">
                <div className="columns">
                  <div className="column">
                    <h1 className="title page-title">{ ABOUT.title }</h1>
                    <div className="subtitle is-size-4 mb-4">{ ABOUT.subtitle }</div>
                    <div className="about-text mb-5">
                      { ABOUT.text }
                    </div>
                    <section className="links">
                      { ABOUT.links.map((link,i) => <span key={'link-'+i}>{link}</span>)}
                    </section>
                  </div>
                  <div className="column">
                    <HeroImg />
                  </div>
                </div>
              </div>
              <div className="button-column">
                  <a href="#portfolio" className="button">
                    <div>View My Portfolio</div>
                    <Icon icon={downArrow} width="32px" />
                  </a>
                </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="section" id="portfolio">
            <h1 className="title has-text-centered">Portfolio</h1>
            {
              WORK.map((p,i) => 
                <div>
                  <div className={`${i%2 ? 'reverse' : ''} sub-section category-header`} key={'work-' + i}>
                    <h2 className="is-size-2 mb-2">
                      {p.title} &nbsp;
                    </h2>
                    <div className="subtitle time">
                      {p.time}
                    </div>
                    { p.technologies && 
                      <ul className="technologies">
                          {p.technologies.map((t,j) => 
                            <li key={'tech-'+j}>
                              <Icon icon={check} width="24px" />
                              <i>{t}</i></li>
                          )}
                        </ul>
                    }
                    
                    <p className="mb-2">{p.description}</p>
                      {p.link && 
                        <a href={p.link[0]} rel="noreferrer" target="_blank" style={{alignItems: 'center', display: 'flex'}}>
                          {p.link[1]}
                          <Icon icon={rightArrow} width="18px" className="ml-1" /> 
                        </a>
                      }    
                  </div>                
                  { p.projects && p.projects.map((project,j) => 
                    <div className={`${j%2 ? 'reverse' : ''} sub-section`} key={'project-' + i}>
                      <div className="project-header">
                        <h3 className="is-size-4">{project.title}</h3>
                        <ul className="technologies pb-5">
                          {project.technologies.map((t,j) => 
                            <li key={'tech-'+j}>
                              <Icon icon={check} width="24px" />
                              <i>{t}</i></li>
                          )}
                        </ul>
                        <div className="columns main-columns">
                          <div className={`mb-4 px-4 column is-one-third`}>
                            <p className="mb-2">{project.description}</p>
                            {project.link && 
                              <a href={project.link} rel="noreferrer" target="_blank" style={{alignItems: 'center', display: 'flex'}}>
                                View Site 
                                <Icon icon={rightArrow} width="18px" className="ml-1" /> 
                              </a>
                            }
                          </div>
                          <div className="column is-two-thirds">
                            {
                              project.headerImg && 
                              <div key={"img-" + j} className="product-img-wrapper mx-4">
                                <img src={project.headerImg} alt='' width="100%" /> 
                              </div>
                            }
                          </div>
                      </div>
                    </div>
                      {
                        project.images && project.images.map((img,i) => 
                          <div className="columns">
                            <div className={`column ${img[1]}`}>
                              <img src={img[0]} alt="" />
                            </div>
                            {
                              img[2] && 
                                <div className={`column ${img[3]}`}>
                                  <p>{img[2]}</p>
                                </div>
                                
                            }
                          </div>
                        )
                      }
                    {
                      project.images && project.thumbnails && 
                      <img src={project.images[0]} alt="" />
                    }
                    
                  </div>
                )}
              </div>
            )
          }
        </section>

          <section className="section" id="testimonials">
            <h1 className="title has-text-centered">Testimonials</h1>
            <p>Here are some kind words from my colleagues. Find more on my <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer" target="_blank">LinkedIn profile</a>.</p>
            <div className="columns" style={{flexWrap: 'wrap'}}>
              {
                TESTIMONIALS.map((t,i) => 
                  <div key={'testimonial-' + i} style={{minWidth: '45%'}} className="column mx-5 sub-section mb-6">
                    <Icon icon={quote} width="62px" style={{color: 'gray'}} /> 
                    <h2 className="is-size-5">
                      {t.text}
                    </h2>
                    <p><strong>{t.colleague}, {t.title}, {t.organization}</strong></p>
                  </div>
                
                )}
            </div>
          </section>
      </div>
                
      </div>
      <footer className="footer">
        <section className="links container p-6">
          { ABOUT.links.map((link,i) => <span key={'link-'+i}>{link}</span>)}
        </section>
        <div className="portrait-wrapper">
          <img src={ben} className='portrait' alt="Portrait" width="130px" />
        </div>
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
