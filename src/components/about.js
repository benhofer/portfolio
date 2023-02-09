import React from 'react';
import { Icon } from '@iconify/react';
import downArrow from '@iconify/icons-mdi/arrow-down-drop-circle';
import { ABOUT } from '../content';
import HeroImg from '../hero-img';

function About() {
  return (
    <section className="section" id="about-me">
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-body p-6">
          <div className="container px-5 pt-6">
            <div className="columns">
              <div className="column">
                <h1 className="title page-title">{ABOUT.title}</h1>
                <div className="subtitle is-size-4 mb-4">{ABOUT.subtitle}</div>
                <div className="about-text mb-5">{ABOUT.text}</div>
                <section className="links">
                  {ABOUT.links.map((link) => (
                    <span key={`link-${link.id}`}>{link.link}</span>
                  ))}
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
  );
}

export default About;
