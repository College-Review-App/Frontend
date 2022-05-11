import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import HeaderLogo from "./colleyLogo.png";
import { fetchCollegesOnRender, getColleges } from "../../global";
import { Autocomplete, TextField } from "@mui/material";

// Header:

// - Search bar to search by colleges
// - About page
// - FAQ

//use Link for user navigation
//use navigate to do it yourself (form sumbissions)

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [colleges, setColleges] = useState<String[]>([]);

  useEffect(() => {
    let allColleges = getColleges();
    collegesNotFetched(allColleges);
  }, []);

  // Checks to see if this useEffect has triggered before the API call to get
  // all the colleges has finished. If so, makes the API call again and waits
  // until it finished before set colleges.
  async function collegesNotFetched(allColleges: JSON) {
    if (!allColleges) {
      await fetchCollegesOnRender();
      allColleges = getColleges();
    }
    let temp: String[] = [];
    Object(allColleges).forEach((curr: Object) => {
      temp.push(Object(curr)["collegeName"]);
    });
    setColleges(temp);
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

      {location.pathname === "/" ? null : (
        <Autocomplete
          disablePortal
          onChange={(e) => {
            const element = e.target as HTMLInputElement;
            const value = element.innerHTML;
            navigate(`./colleges/${value}`);
          }}
          id="combo-box-demo"
          options={colleges}
          sx={{ width: "50%", height: "10" }}
          renderInput={(params) => <TextField {...params} label="Search for a college" />}
        />
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
