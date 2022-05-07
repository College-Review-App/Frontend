import React, { useState } from "react";

const AddCollege = () => {
  //state fields for user input form asked to an applicant
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [race, setRace] = useState("");
  const [gender, setGender] = useState(-1);
  const [familyIncome, setFamilyIncome] = useState(-1);
  const [highschool, setHighschool] = useState("");
  const [GPA, setGPA] = useState(-1.0);
  const [SAT, setSAT] = useState(-1);
  const [ACT, setACT] = useState(-1);
  const [intendedMajor, setIntendedMajor] = useState("");
  const [extracurriculars, setExtracurriculars] = useState("");
  const [advice, setAdvice] = useState("");
  const [outcome, setOutcome] = useState(-1);
  const [isVerified, setIsVerified] = useState(false);

//   const addApplicationtoDatabase = () => {
//     const requestOptions = {
//       method: "POST",
//       body: JSON.stringify({
//         city: city,
//         state: state,
//         country: country,
//         race: race,
//         gender: gender,
//         familyIncome: familyIncome,
//         highschool: highschool,
//         GPA: GPA,
//         SAT: SAT,
//         ACT: ACT,
//         intendedMajor: intendedMajor,
//         extracurriculars: extracurriculars,
//         advice: advice,
//         outcome: outcome,
//         isVerified: isVerified,
//       }),
//     };
//     fetch(
//       `http://localhost:8080/add-applications-by-college-name?collegeName=${collegeName}`,
//       requestOptions
//     )
//       .then(async (response) => {
//         const data = await response.json();
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log("There was an error!", error);
//       });
//   };

  return (
    <div>
      <form>
        <div className="userFormContainer">
          <label>
            City:
            <input
              type="text"
              name="city"
              value={city}
              onChange={(text) => {
                setCity(text.target.value);
              }}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={state}
              onChange={(text) => {
                setState(text.target.value);
              }}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={country}
              onChange={(text) => {
                setCountry(text.target.value);
              }}
            />
          </label>
          <label>
            Race:
            <input
              type="text"
              name="race"
              value={race}
              onChange={(text) => {
                setRace(text.target.value);
              }}
            />
          </label>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              checked={gender === 0}
              onClick={() => setGender(0)}
            />
            Male
            <input
              type="radio"
              name="gender"
              checked={gender === 1}
              onClick={() => setGender(1)}
            />
            Female
            <input
              type="radio"
              name="gender"
              checked={gender === 2}
              onClick={() => setGender(2)}
            />
            Other
          </label>
          <label>
            Family Income:
            <input
              type="radio"
              name="family income"
              checked={familyIncome === 50000}
              onClick={() => setFamilyIncome(50000)}
            />
            0k - 50k
            <input
              type="radio"
              name="family income"
              checked={familyIncome === 250000}
              onClick={() => setFamilyIncome(250000)}
            />
            50k - 250k
            <input
              type="radio"
              name="family income"
              checked={familyIncome === 1000000}
              onClick={() => setFamilyIncome(1000000)}
            />
            250k+
          </label>
          <label>
            Highschool:
            <input
              type="text"
              name="highschool"
              value={highschool}
              onChange={(text) => {
                setHighschool(text.target.value);
              }}
            />
          </label>
          <label>
            GPA
            <input
              type="number"
              name="GPA"
              value={GPA}
              onChange={(number) => setGPA(parseFloat(number.target.value))}
            />
          </label>
          <label>
            SAT
            <input
              type="number"
              name="SAT"
              value={SAT}
              onChange={(number) => setSAT(parseInt(number.target.value))}
            />
          </label>
          <label>
            ACT
            <input
              type="number"
              name="ACT"
              value={ACT}
              onChange={(number) => setACT(parseInt(number.target.value))}
            />
          </label>
          <label>
            Intended Major:
            <input
              type="text"
              name="Intended Major"
              value={intendedMajor}
              onChange={(text) => {
                setIntendedMajor(text.target.value);
              }}
            />
          </label>
          <label>
            Extracirrulars:
            <input
              type="text"
              name="Extracirriculars"
              value={extracurriculars}
              onChange={(text) => {
                setExtracurriculars(text.target.value);
              }}
            />
          </label>
          <label>
            Advice:
            <input
              type="text"
              name="Advice"
              value={advice}
              onChange={(text) => {
                setAdvice(text.target.value);
              }}
            />
          </label>
          <label>
            Outcome:
            <input
              type="radio"
              name="outcome"
              checked={outcome === 0}
              onClick={() => setOutcome(0)}
            />
            Accepted
            <input
              type="radio"
              name="outcome"
              checked={outcome === 1}
              onClick={() => setOutcome(1)}
            />
            Rejected
            <input
              type="radio"
              name="outcome"
              checked={outcome === 2}
              onClick={() => setOutcome(2)}
            />
            Waitlisted
          </label>
          <label>
            Verfied:
            <input
              type="radio"
              name="verification"
              checked={isVerified === true}
              onClick={() => setIsVerified(true)}
            />
            True
            <input
              type="radio"
              name="verification"
              checked={isVerified === false}
              onClick={() => setIsVerified(false)}
            />
            False
          </label>
        </div>

        <div 
            // onClick={() => addApplicationtoDatabase()}
        >Submit</div>
      </form>
    </div>
  );
}

export default AddCollege;
