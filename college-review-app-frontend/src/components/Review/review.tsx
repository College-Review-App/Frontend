import React, { useState } from 'react';

//CSS styles import 
import './review.css';

//Applicant Review Interface
import applicantReview from '../../interfaces/applicantReview';

// Modal Import
import FullProfileModal from '../FullProfileModal/FullProfileModal';


// const Review = (props: { review: applicantReview }) => {
//   const review = props.review;
//   let intendedMajor = review.getIntendedMajor;
//   let GPA = review.getGPA;
//   let outcome = review.getOutcome == 1 ? "Accepted" : "Rejected";


// This component represents a Application Review / Profile.

const Review = () => {

  // React State Variables
  const [refresh, setRefresh] = useState<boolean>(false);

  // This is for opening the modal when you want to see the full profile.
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="reviewContainer">
      <FullProfileModal refresh={refresh} open={modalOpen} />
      <div className="reviewItemsContainer">
        <div className="reviewContainerTopRow">
          {/* Row */}
          {/* Rejected ❌ */}
          <div className="decisionContainer"> Accepted ✅</div>
          <div className="classContainer">Class of 2025</div>
        </div>
        <div className="statisticsAdviceContainer">
          <div className="reviewItemStatisticsContainer">
            {/* Column */}
            <p className="reviewStatItem">GPA: 3.72</p>
            <p className="reviewStatItem">SAT: 1400</p>
            <p className="reviewStatItem">ACT: 32</p>
            <p className="reviewStatItem">Major: Computer Science</p>
          </div>
          <div className="reviewItemAdviceContainer">
            <div className="reviewStatItem">Advice:</div>
            <div className="reviewStatItem">
              Lorem ipsum dolor sit amet, harum conceptam sed in, te omnis
              detracto per, eos enim dissentiunt efficiantur ut. Ad nam etiam
              possim definitionem, novum ignota salutandi vix in. Ne summo.
            </div>
          </div>
        </div>
        <div className="fullProfileButtonContainer">
          <button
            onClick={() => {
              setRefresh(!refresh);
              setModalOpen(true);
            }}
          >
            Click to view full profile!
          </button>
        </div>
      </div>

      {/* Advice */}
      {/* Click to view full profile */}

      {/* <p>{intendedMajor}</p>
      <p>{GPA}</p>
      <p>{outcome}</p> */}
      {/* <p>hello</p> */}
    </div>
  );
};

export default Review;
