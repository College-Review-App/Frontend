// CSS
import './AddCollegePage.css';
import { useState } from 'react';

const AddCollegePage = () => {
  //state fields
  const [addCollegeText, setAddCollegeText] = useState<string>('');
  const [invalidCollegeText, setInvalidCollegeText] = useState<boolean>(false);
  const [thanks, setThanks] = useState<boolean>(false);

  const addNewCollege = () => {
    const addNewCollegeText = addCollegeText.toUpperCase();
    const requestOptions = {
      method: 'POST',
    };
    fetch(
      `http://localhost:8080/add-new-college?collegeName=${addNewCollegeText}`,
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  const handleSumbit = () => {
    console.log('called');
    let validSubmission = true;
    if (
      addCollegeText === '' ||
      addCollegeText == null ||
      addCollegeText == undefined
    ) {
      console.log('invalid');
      setInvalidCollegeText(true);
      validSubmission = false;
    }

    if (validSubmission) {
      console.log('add');
      setThanks(true);
      addNewCollege();
    }
  };

  return (
    <div className="addCollegeContainer">
      {thanks ? (
        <p className="thanksText">
          Thanks for your submission! <br />
          <span className='thanksTextSubHeadline'>We look forward to adding your college soon!</span>
        </p>
      ) : (
        <p>Add a College</p>
      )}
      {thanks ? null : (
        <form className="addCollegeForm">
          <input
            name="Add College"
            type="text"
            placeholder="Enter College Here"
            value={addCollegeText}
            onChange={(text) => setAddCollegeText(text.target.value)}
          />
          {invalidCollegeText && (
            <p style={{ marginTop: '-10px' }}>Please enter a college name!</p>
          )}
          <button className="addCollegeButton" onClick={() => handleSumbit()}>
            Add College!
          </button>
        </form>
      )}
    </div>
  );
};

export default AddCollegePage;
