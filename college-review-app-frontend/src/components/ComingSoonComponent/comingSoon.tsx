import React from 'react';
import './comingSoon.css';
import {Link} from "react-router-dom";

function comingSoon() {
  return (
    <div className="comingSoonContainer">
        <div className="comingSoonText">Coming Soon!</div>
        <div className="comingSoonSubtitleText">
          We are currently working on this page and will launch it soon!
        </div>
        {/* make colley word a link */}
        <div className="meantimeText">
          In the meantime, checkout all the colleges on{' '}
          <Link to="/" className="colleyTextComingSoon">Colley!</Link>
        </div>
      </div>
  );
}

export default comingSoon;
