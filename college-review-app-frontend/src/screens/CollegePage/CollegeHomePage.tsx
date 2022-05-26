import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CollegeHomePage.css';
import Review from '../../components/Review/review';
import applicantReview from '../../interfaces/applicantReview';
import college from '../../interfaces/college';
import { MdLocationOn } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import AddReviewModal from '../../components/AddReviewModal/AddReviewModal';

function CollegeHomePage() {
  //collegeName field that we pass through the Url to relay information
  let { collegeName } = useParams();

  const [collegeInfo, setCollegeInfo] = useState<college>(new college());
  const [applicants, setApplicants] = useState<applicantReview[]>([]);

  // State variables for the add review modal
  const [refresh, setRefresh] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
      <AddReviewModal refresh={refresh} open={modalOpen} />
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
            <button className="reviewStatDataButtonText">
              Click for More Data!
            </button>
          </div>
        </div>
        <div className="applicantReviewsRightContainer">
          {/* {applicants.map((applicantReview) => (
            <Review
              review={applicantReview}
              key={applicantReview.getReviewId}
            />
          ))} */}
          <div className="applicantReviewRightHeaderContainer">
            <div className="allReviewsText">All Profiles</div>
            <button
              className="writeReviewButton"
              onClick={() => {
                setRefresh(!refresh);
                setModalOpen(true);
              }}
            >
              <div style={{ color: 'white', fontWeight: '500' }}>
                Add your Profile{' '}
              </div>
              <BsPencilSquare color="white" fontWeight={'bold'} />
            </button>
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
