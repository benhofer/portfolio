import React, { useState } from 'react';

function Header() {
  const [menu, setMenu] = useState(false);

  const handleSetMenu = () => {
    const m = menu;
    setMenu(!m);
  };

  return (
    <div className="nav-container">
      <nav
        className="navbar container px-3 py-4"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <h1 className="is-size-4">
            <a className="navbar-item is-uppercase" href="/">
              Ben Hofer
            </a>
          </h1>
          <button
            type="button"
            className={`navbar-burger ${menu && 'is-active'}`}
            onClick={handleSetMenu}
            aria-label="menu"
            aria-expanded={menu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${menu && 'is-active'}`}
        >
          <div className="navbar-end">
            <a href="#about-me" className="navbar-item" onClick={handleSetMenu}>
              About Me
            </a>
            <a
              href="#portfolio"
              className="navbar-item"
              onClick={handleSetMenu}
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="navbar-item"
              onClick={handleSetMenu}
            >
              Testimonials
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
