import { FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import "./AddReviewModal.css";

const AddReviewModal = ({ refresh, open }: { refresh: boolean, open: boolean }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    setModalOpen(open);
  }, [refresh]);

  //state fields for user input form asked to an applicant
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [race, setRace] = useState<string>("");
  const [gender, setGender] = useState<number>(-1);
  const [familyIncome, setFamilyIncome] = useState<number>(-1);
  const [highschool, setHighschool] = useState<string>("");
  const [GPA, setGPA] = useState<number>();
  const [invalidGPA, setInvalidGPA] = useState<boolean>(false);
  const [SAT, setSAT] = useState<number>(-1);
  const [ACT, setACT] = useState<number>(-1);
  const [intendedMajor, setIntendedMajor] = useState<string>("");
  const [extracurriculars, setExtracurriculars] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");
  const [outcome, setOutcome] = useState<number>(-1);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log(GPA);
    if (!GPA || GPA > 4.0 || GPA < 0.0) {
      setInvalidGPA(true);
    }
  }

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
    <Modal open={modalOpen} onClose={handleClose}>
      <div className="modalContainer">
        <form>
          <div className="userFormContainer">
            <label>
              City:
              <input
                className="modalTextInput"
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
                className="modalTextInput"
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
                className="modalTextInput"
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
                className="modalTextInput"
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
              <RadioGroup
                row
                aria-labelledby="gender-radio-buttons-group"
                name="genderRadioButtons"
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                  onChange={() => setGender(0)}
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                  onChange={() => setGender(1)}
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                  onChange={() => setGender(2)}
                />
              </RadioGroup>
            </label>
            <label>
              Family Income:
              <RadioGroup
                row
                aria-labelledby="income-radio-buttons-group"
                name="incomeRadioButtons"
              >
                <FormControlLabel
                  value="0k - 50k"
                  control={<Radio />}
                  label="0k - 50k"
                  onChange={() => setFamilyIncome(50000)}
                />
                <FormControlLabel
                  value="50k - 250k"
                  control={<Radio />}
                  label="50k - 250k"
                  onChange={() => setOutcome(250000)}
                />
                <FormControlLabel
                  value="250k+"
                  control={<Radio />}
                  label="250k+"
                  onChange={() => setOutcome(1000000)}
                />
              </RadioGroup>
            </label>
            <label>
              Highschool:
              <input
                className="modalTextInput"
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
                className="modalTextInput"
                type="number"
                name="GPA"
                onChange={(number) => {
                  setGPA(parseFloat(number.target.value));
                  setInvalidGPA(false)
                }}
              />
              {invalidGPA && (
                <p className="invalidInputWarning">Invalid GPA (4.0 Scale)</p>
              )}
            </label>
            <label>
              SAT
              <input
                className="modalTextInput"
                type="number"
                name="SAT"
                value={SAT}
                onChange={(number) => setSAT(parseInt(number.target.value))}
              />
            </label>
            <label>
              ACT
              <input
                className="modalTextInput"
                type="number"
                name="ACT"
                value={ACT}
                onChange={(number) => setACT(parseInt(number.target.value))}
              />
            </label>
            <label>
              Intended Major:
              <input
                className="modalTextInput"
                type="text"
                name="Intended Major"
                value={intendedMajor}
                onChange={(text) => {
                  setIntendedMajor(text.target.value);
                }}
              />
            </label>
            <label>
              Extracurriculars:
              <textarea
                className="modalTextArea"
                name="Extracirriculars"
                value={extracurriculars}
                onChange={(text) => {
                  setExtracurriculars(text.target.value);
                }}
              />
            </label>
            <label>
              Advice:
              <textarea
                className="modalTextArea"
                name="Advice"
                value={advice}
                onChange={(text) => {
                  setAdvice(text.target.value);
                }}
              />
            </label>
            <label>
              Outcome:
              <RadioGroup
                row
                aria-labelledby="outcome-radio-buttons-group"
                name="outcomeRadioButtons"
              >
                <FormControlLabel
                  value="Accepted"
                  control={<Radio />}
                  label="Accepted"
                  onChange={() => setOutcome(1)}
                />
                <FormControlLabel
                  value="Rejected"
                  control={<Radio />}
                  label="Rejected"
                  onChange={() => setOutcome(0)}
                />
              </RadioGroup>
            </label>
            <label>
              Verified:
              <RadioGroup
                row
                aria-labelledby="outcome-radio-buttons-group"
                name="outcomeRadioButtons"
              >
                <FormControlLabel
                  value="True"
                  control={<Radio />}
                  label="True"
                  onChange={() => setIsVerified(true)}
                />
                <FormControlLabel
                  value="False"
                  control={<Radio />}
                  label="False"
                  onChange={() => setIsVerified(false)}
                />
              </RadioGroup>
            </label>
            
          </div>
        </form>
        <button 
          className="modalSubmitButton"
          onClick={() => handleSubmit()}
        >Submit</button>
      </div>
    </Modal>
  );
};

export default AddReviewModal;
