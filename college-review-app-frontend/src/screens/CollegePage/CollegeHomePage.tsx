import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CollegeHomePage.css';
import Review from '../../components/Review/review';
import applicantProfile from '../../interfaces/applicantProfile';
import college from '../../interfaces/college';
import { MdLocationOn } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import AddReviewModal from '../../components/AddReviewModal/AddReviewModal';

function CollegeHomePage() {
  //collegeName field that we pass through the Url to relay information
  let { collegeName } = useParams();
  const navigate = useNavigate();

  const [collegeInfo, setCollegeInfo] = useState<college>(new college());
  const [applicants, setApplicants] = useState<applicantProfile[]>([]);

  // State variables for the add review modal
  const [refresh, setRefresh] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // state variables for GPA, SAT, and ACT
  const [GPA, setGPA] = useState<number>(0);
  const [SAT, setSAT] = useState<number>(0);
  const [ACT, setACT] = useState<number>(0);

  useEffect(() => {
    getInformationForCollege();
  }, [collegeName]);

  // calculates the average gpa of all applicants of a school
  const calculateGPA = (applicantProfiles : applicantProfile[]): number => {
    let sum = 0;
    for (let i = 0; i < applicantProfiles.length; i++) {
      sum += applicantProfiles[i].getGPA;
    }

    //rounds GPA to two decimal places
    return Math.round((sum / applicantProfiles.length) * 100) / 100;
  };

  const calculateSAT = (applicantProfiles : applicantProfile[]): number => {
    let sum = 0;
    let length = applicantProfiles.length;
    for (let i = 0; i < applicantProfiles.length; i++) {
      let SAT = applicantProfiles[i].getSAT;
      if (SAT === -1) {
        length--;
      } else {
        sum += SAT;
      }
    }

    //rounds to the nearest 10
    return Math.ceil(sum / length / 10) * 10;
  };

  const calculateACT = (applicantProfiles : applicantProfile[]): number => {
    let sum = 0;
    let length = applicantProfiles.length;
    for (let i = 0; i < applicantProfiles.length; i++) {
      let ACT = applicantProfiles[i].getACT;
      if (ACT === -1) {
        length--;
      } else {
        sum += ACT;
      }
    }

    //rounds to the nearest whole number
    return Math.ceil(sum / length);
  };

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
        // Navigates to the 404 error page if the college doesn't exist
        // in the database
        if (data.message === 'Result must not be null!') {
          navigate('/404error');
        }
        // console.log(data);
        // Parses JSON object into college info and applicant
        // review array
        setCollegeInfo(new college(data[0]));
        let temp: applicantProfile[] = [];
        data[1].forEach((element: Object) => {
          temp.push(new applicantProfile(element));
        });
        setApplicants(temp);
        setGPA(calculateGPA(temp));
        setSAT(calculateSAT(temp));
        setACT(calculateACT(temp));
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div className="collegePageContainer">
      <AddReviewModal
        refresh={refresh}
        open={modalOpen}
        collegeName={collegeName!}
      />
      <div className="collegeInfoContainer">
        <div className="collegeInfoTextContainer">
          {/* should be {collegeInfo.getCollegeName} but my backend isnt running lol */}
          <h1 className="collegeName">{collegeInfo.getCollegeName}</h1>
          <div className="collegeLocation">
            <MdLocationOn
              style={{ marginRight: 5 }}
              size={'1em'}
              color={'white'}
            />
            Seattle, WA
          </div>
        </div>
      </div>
      <div className="reviewInfoContainer">
        <div className="reviewStatsLeftContainer">
          <div className="reviewStatContainer">
            <div className="reviewStatText">{Number.isNaN(GPA) || GPA === 0 ? 'N/A' : GPA.toString()}</div>
            <div className="reviewStatHeadlineText">Average GPA</div>
          </div>
          <div className="reviewStatContainer">
            <div className="reviewStatText">
              {/* checks if the number is NaN (doesn't exist),
              if it does return the normal score, if not display 'N/A' to user */}
              {Number.isNaN(SAT) || SAT === 0 ? 'N/A' : SAT.toString()}
            </div>
            <div className="reviewStatHeadlineText">Average SAT Scores</div>
          </div>
          <div className="reviewStatContainer">
            <div className="reviewStatText">
              {/* checks if the number is NaN (doesn't exist),
              if it does return the normal score, if not display 'N/A' to user */}
              {Number.isNaN(ACT) || ACT === 0 ? 'N/A' : ACT.toString()}
            </div>
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
          {applicants.map((profile) => (
            <Review key={profile.getProfileId} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollegeHomePage;
