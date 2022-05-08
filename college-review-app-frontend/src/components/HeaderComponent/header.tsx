import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import HeaderLogo from './HeaderLogo.svg';

// Header:

// - Search bar to search by colleges
// - About page
// - FAQ

function Header() {
  let navigate = useNavigate();

  return (
    <header className="headerContainer">
      <img
        className="headerColleyImg"
        src={HeaderLogo}
        alt="Colley Logo Image"
      />
      {/* Search Bar */}
      <div >
        <input
          className='headerSearchBar'
          aria-autocomplete="list"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder="Search For a College"
        />
      </div>

      <div className="navbarContainer">
        <p
          onClick={() => {
            navigate('/about');
          }}
          className="headerLinkItem"
        >
          About
        </p>
        <p
          onClick={() => {
            navigate('/blog');
          }}
          className="headerLinkItem"
        >
          Blog
        </p>
        <p
          onClick={() => {
            navigate('/FAQ');
          }}
          className="headerLinkItem"
        >
          FAQ
        </p>
      </div>
    </header>
  );
}

export default Header;
