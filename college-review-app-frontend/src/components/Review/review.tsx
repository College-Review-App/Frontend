import React from "react";
import applicantReview from "../../interfaces/applicantReview";
import "./review.css"

const Review = (props: { review: applicantReview }) => {
  const review = props.review;
  let intendedMajor = review.getIntendedMajor;
  let GPA = review.getGPA;

  const getOutcomeText = () => {
    if (review.getOutcome === 1) {
      return "Accepted";
    } else if (review.getOutcome === 0) {
      return "Rejected";
    } else {
      return "Waitlisted";
    }
  }

  // No need for waitlisted anymore
  let outcome = getOutcomeText();

  return (
    <div className="reviewContainer">
      <p>{intendedMajor}</p>
      <p>{GPA}</p>
      <p>{outcome}</p>
    </div>
)
};

export default Review;
