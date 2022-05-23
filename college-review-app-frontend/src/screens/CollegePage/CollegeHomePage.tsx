import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CollegeHomePage.css';
import Review from '../../components/Review/review';
import applicantReview from '../../interfaces/applicantReview';
import college from '../../interfaces/college';
import { MdLocationOn } from 'react-icons/md';
import {BsPencilSquare} from 'react-icons/bs';

function CollegeHomePage() {
  //collegeName field that we pass through the Url to relay information
  let { collegeName } = useParams();

  const [collegeInfo, setCollegeInfo] = useState<college>(new college());
  const [applicants, setApplicants] = useState<applicantReview[]>([]);

  useEffect(() => {
    getInformationForCollege();
  }, [collegeName]);

  const getInformationForCollege = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(
      `http://localhost:8080/get-college-and-applications-from-college-name?collegeName=${collegeName}`,
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        // Parses JSON object into college info and applicant
        // review array
        setCollegeInfo(new college(data[0]));
        let temp: applicantReview[] = [];
        data[1].forEach((element: Object) => {
          temp.push(new applicantReview(element));
        });
        setApplicants(temp);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div className="collegePageContainer">
      <div className="collegeInfoContainer">
        <div className="collegeInfoTextContainer">
          {/* should be {collegeInfo.getCollegeName} but my backend isnt running lol */}
          <h1 className="collegeName">University of Washington</h1>
          <div className="collegeLocation">
            <MdLocationOn
              style={{ marginRight: 5 }}
              size={20}
              color={'white'}
            />
            Seattle, WA
          </div>
        </div>
      </div>
      <div className="reviewInfoContainer">
        <div className="reviewStatsLeftContainer">
          <div className="reviewStatContainer">
            <div className="reviewStatText">3.72</div>
            <div className="reviewStatHeadlineText">Average GPA</div>
          </div>
          <div className="reviewStatContainer">
            <div className="reviewStatText">1450</div>
            <div className="reviewStatHeadlineText">Average SAT Scores</div>
          </div>
          <div className="reviewStatContainer">
            <div className="reviewStatText">32</div>
            <div className="reviewStatHeadlineText">Average ACT Scores</div>
          </div>
          <div className="reviewStatDataButton">
          <div className="reviewStatDataButtonText">Click for More Data!</div>
          </div>
        </div>
        <div className="applicantReviewsRightContainer">
          {/* {applicants.map((applicantReview) => (
            <Review
              review={applicantReview}
              key={applicantReview.getReviewId}
            />
          ))} */}
          <div className='applicantReviewRightHeaderContainer'>
            <div className="allReviewsText">All Reviews</div>
            <div className="writeReviewButton">
              <div style={{color: 'white', fontWeight: '500'}}>Write a Review </div>
              <BsPencilSquare color='white' fontWeight={'bold'}/> 
            </div>
          </div>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}

export default CollegeHomePage;
