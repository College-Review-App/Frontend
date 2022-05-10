import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './header.css';
import HeaderLogo from './colleyLogo.png';
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { getColleges } from '../../global';

// Header:

// - Search bar to search by colleges
// - About page
// - FAQ

//use Link for user navigation
//use navigate to do it yourself (form sumbissions)

function Header() {
  // const navigate = useNavigate();
  const location = useLocation();

  const filterBySearch = (input: String) => {
    const colleges = getColleges();
    console.log(colleges)
  }

  return (
    <header className="headerContainer">
      <Link to="/">
        <img
          className="headerColleyImg"
          src={HeaderLogo}
          alt="Colley Logo Image"
        />
      </Link>
      {/* Search Bar */}
      {/* <div >
        <input
          className='headerSearchBar'
          aria-autocomplete="list"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder="Search For a College"
        />
      </div> */}

      {location.pathname === '/' ? null : (
        <InputGroup width={'50%'}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="search"
            size={'md'}
            placeholder="Search for College"
            onChange={(e) => filterBySearch(e.target.value.toLowerCase())}
            _placeholder={{ opacity: 0.4, color: 'grey.500' }}
            variant="filled"
          />
        </InputGroup>
      )}

      <div className="navbarContainer">
        <Link to="/about" className="headerLinkItem">
          About
        </Link>
        <Link to="/blog" className="headerLinkItem">
          Blog
        </Link>
        <Link to="/faq" className="headerLinkItem">
          FAQ
        </Link>
      </div>
    </header>
  );
}

export default Header;
