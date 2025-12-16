import React from 'react';
import ben from '../img/lego-ben.png';
import { ABOUT } from '../content';

function Footer() {
  return (
    <footer className="footer">
      <section className="links container p-6">
        {ABOUT.links.map((link) => (
          <span key={`link-${link.id}`}>{link.link}</span>
        ))}
      </section>
      <div className="portrait-wrapper">
        <img src={ben} className="portrait" alt="Portrait" width="130px" />
      </div>
      <div className="content has-text-centered p-3">
        <p>&copy; Copyright 2023-2025 Ben Hofer</p>
      </div>
    </footer>
  );
}

export default Footer;
