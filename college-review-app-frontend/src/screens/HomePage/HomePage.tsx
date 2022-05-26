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
import CollegeSearchBar from '../../components/CollegeSearchBar/CollegeSearchBar';

//Webfont Loader Import 
// import WebFont from 'webfontloader';

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
      <div className="landingPageSearchBarContainer">
        <CollegeSearchBar />
      </div>
      <div className='featuredCollegesGreyRowContainer'>
        {/* could do "Colleges you know and love, all on Colley." */}
        <div className="featuredCollegesGreyRowHeader">Hundreds of Colleges all on Colley</div> 
        <div className='featuredCollegesGreyRowCollegesContainer'>
          <img className='featuredCollegesLogo' src={GeorgiaTechLogo}/>
          <img className='featuredCollegesLogo' src={StanfordLogo}/>
          <img className='featuredCollegesLogo' src={UCBerkeleyLogo}/>
          <img className='featuredCollegesLogo' src={UniversityOfMichiganLogo}/>
          <img className='featuredCollegesLogo' src={UniversityOfWashingtonLogo}/>
        </div>
      </div>
      <div className="landingPageFeatureGraphicsHeadline">
        <h1>What we offer</h1>
      </div>
      <div className='landingPageFeatureGraphicsContainer'>
        <div className='featureGraphicContainer'>
          <img src={LandingPageGraphic1} />
          <h1>Unrivaled Insights</h1>
          <p>
            Unlock the information and advice you need to get accepted into
            the college of your dreams.
          </p>
        </div>
        <div className='featureGraphicContainer'>
          <img src={LandingPageGraphic3} />
          <h1>Increased Visibility</h1>
          <p>
            View verified data on past applications to top colleges around the
            country.
          </p>
        </div>
        <div className='featureGraphicContainer'>
          <img src={LandingPageGraphic2} />
          <h1>Crowdsourcing, with Privacy</h1>
          <p>
            Add your own college application experiences to help out other
            students, while maintaining complete privacy.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
