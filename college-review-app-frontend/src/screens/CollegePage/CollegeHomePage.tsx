import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CollegeHomePage.css';
import Review from '../../components/Review/review';
import applicantReview from '../../interfaces/applicantReview';
import college from '../../interfaces/college';

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
    fetch(`http://localhost:8080/get-college-and-applications-from-college-name?collegeName=${collegeName}`, requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log(data);
        // Parses JSON object into college info and applicant 
        // review array
        setCollegeInfo(new college(data[0]));
        let temp : applicantReview[] = [];
        data[1].forEach((element: Object) => {
          temp.push(new applicantReview(element));
        })
        setApplicants(temp);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div className="collegePageContainer">
      <div className="collegeInfoContainer">
        <h1 className='collegeName'>This is the page for {collegeInfo.getCollegeName}</h1>
      </div>
      <div className="reviewInfoContainer">
        <div className="reviewStatsLeftContainer">
          <p>~3.72</p>
          <p>GPA</p>
        </div>
        <div className="applicantReviewsRightContainer">
          {applicants.map((applicantReview) => (
            <Review review={applicantReview} key={applicantReview.getReviewId} />
          ))}
        </div>
        
      </div>
      
    </div>
  );
}

export default CollegeHomePage;
