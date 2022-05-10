import React, { useEffect } from 'react';
import './HomePage.css';

//Search Bar Background Image
import SearchBarBackgroundImage from './images/collegeLandingPage.jpg'

// Landing Page Graphics Images
import LandingPageGraphic1 from './images/test1.png';
import LandingPageGraphic2 from './images/test2.png';
import LandingPageGraphic3 from './images/test3.png';

// College Image Imports
import StanfordLogo from './images/stanford.png';
import UniversityOfWashingtonLogo from './images/UniversityOfWashington.png';
import UniversityOfMichiganLogo from './images/UniversityofMichigan.png';
import UCLALogo from './images/UCLA.png';
import UCBerkeleyLogo from './images/UCBerkeley.png';
import UIUCLogo from './images/UniversityOfIllinois.png';
import GeorgiaTechLogo from './images/GeorgiaTech.png';
import UniversityOfTexasLogo from './images/UniversityOfTexas.png';

function HomePage() {
  const addCollege = () => {
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ college_name: 'University of Utah', GPA: 2.89 }),
    };
    fetch('http://localhost:8080/add-college', requestOptions)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div className='landingPageContainer'>
      {/* <button onClick={() => addCollege()}>Add College</button> */}
      <div className="landingPageSearchBarContainer">
        <img className="landingPageSearchBarBackgroundImage"src={SearchBarBackgroundImage}/>
        <div className="landingPageSearchBarHeader">The #1 Site to See College Data</div>
        <input className="landingPageSearchBar" type="text" placeholder='Search for a College' />
      </div>
      <div className='featuredCollegesGreyRowContainer'>
        <img className='featuredCollegesLogo' src={GeorgiaTechLogo}/>
        <img className='featuredCollegesLogo' src={StanfordLogo}/>
        <img className='featuredCollegesLogo' src={UCBerkeleyLogo}/>
        <img className='featuredCollegesLogo' src={UniversityOfMichiganLogo}/>
        <img className='featuredCollegesLogo' src={UniversityOfWashingtonLogo}/>
      </div>

      <div className='landingPageFeatureGraphicsContainer'>

      </div>

      {/* <div>This is Colley.</div> */}
      <div className="landingPageGraphicsContainer">
        <div className="landingPageGraphicContainer">
          <div className="landingPageGraphicTextContainer">
            <div className="landingPageGraphicTextHeader">Crowdsourcing, with Privacy</div>
            <div className="landingPageGraphicText">
              Add your own college application experiences to help out other
              prospective students, all while maintaining complete privacy.
            </div>
          </div>
          <img className="landingPageGraphics" src={LandingPageGraphic1} />
        </div>
        <div className="landingPageGraphicContainer">
          <div className="landingPageGraphicTextContainer">
            <div className="landingPageGraphicTextHeader">Increased Visibility</div>
            <div className="landingPageGraphicText">
              View verified data on past applications to top colleges around the
              country.
            </div>
          </div>
          <img className="landingPageGraphics" src={LandingPageGraphic2} />
        </div>
        <div className="landingPageGraphicContainer">
          <div className="landingPageGraphicTextContainer">
            <div className="landingPageGraphicTextHeader">Unrivaled Insights</div>
            <div className="landingPageGraphicText">
              Unlock the information and advice you need to get accepted into
              the college of your dreams.
            </div>
          </div>
          <img className="landingPageGraphics" src={LandingPageGraphic3} />
        </div>
      </div>

      {/* <div className='scrollable_college_bar_landing_page'>
            <img className="scrollable_college_image" src={StanfordLogo} />
            <img className="scrollable_college_image" src={UniversityOfWashingtonLogo} />
            <img className="scrollable_college_image" src={UniversityOfMichiganLogo} />
            <img className="scrollable_college_image" src={UCLALogo} />
            <img className="scrollable_college_image" src={UCBerkeleyLogo} />
            <img className="scrollable_college_image" src={UIUCLogo} />
            <img className="scrollable_college_image" src={GeorgiaTechLogo} />
            <img className="scrollable_college_image" src={UniversityOfTexasLogo} />
        </div> */}
    </div>
  );
}

export default HomePage;
