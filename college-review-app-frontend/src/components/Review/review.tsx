import React from "react";
import applicantReview from "../../interfaces/applicantReview";
import "./review.css"

const Review = (props: { review: applicantReview }) => {
  const review = props.review;
  let intendedMajor = review.getIntendedMajor;
  let GPA = review.getGPA;
  let outcome = review.getOutcome == 1 ? "Accepted" : "Rejected";

  return (
    <div className="reviewContainer">
      <p>{intendedMajor}</p>
      <p>{GPA}</p>
      <p>{outcome}</p>
    </div>
)
};

export default Review;
