import React from 'react';
import "./footer.css"
import FooterLogo from './tempLogo.svg';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  let navigate = useNavigate();

  // Footer:

  // - Social medias
  // - Page landing page links
  // - Contacts

  return (
    <footer className="footer">
      <div className="logoAndSocialMediaContainer">
        <img
          className="footerColleyImg"
          src={FooterLogo}
          alt="Colley Logo Image"
        />

        <div className="footerSocialMediaContainer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/getspogo"
          >
            <FaLinkedin
              className="socialIconFooter"
              size={25}
              color={'black'}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/getspogo"
          >
            <FaTwitter
              className="socialIconFooter"
              size={25}
              color={'black'}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/getspogo/"
          >
            <FaInstagram
              className="socialIconFooter"
              size={25}
              color={'black'}
            />
          </a>
        </div>
      </div>

      {/* divider */}
      <hr color='black'/>

      <div className="footerLinksColumnContainer">
        <div className="footerColumnContainer">
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="footerColumnContainer">
          <h4>Contact</h4>
          <p
            onClick={() => {
              window.open('mailto:getspogo@gmail.com');
            }}
          >getcolley@colley.com</p>
        </div>
        <div className="footerColumnContainer">
          <h4>Pages</h4>
          <p
            onClick={() => {
              navigate('/');
            }}
            className="bottomLinksText"
          >
            Home
          </p>
          <p
            onClick={() => {
              navigate('/about');
            }}
            className="bottomLinksText"
          >
            About
          </p>
          <p
            onClick={() => {
              navigate('/blog');
            }}
            className="bottomLinksText"
          >
            Blog
          </p>
          <p
            onClick={() => {
              navigate('/FAQ');
            }}
            className="bottomLinksText"
          >
            FAQ
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
