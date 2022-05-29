// CSS
import './AddCollegePage.css';
import { useState, useEffect } from 'react';

const AddCollegePage = () => {
  //state fields
  const [addCollegeText, setAddCollegeText] = useState<string>('');
  const [invalidCollegeText, setInvalidCollegeText] = useState<boolean>(false);
  const [thanks, setThanks] = useState<boolean>(false);

  const addNewCollege = () => {
    console.log(addCollegeText);
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ collegeName: addCollegeText }),
    };
    fetch('http://localhost:8080/add-new-college?collegeName', requestOptions)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  const getAllRequestedColleges = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch('http://localhost:8080/get-all-requested-colleges', requestOptions)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  const addRequestedCollegetoCollegeDB = () => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        collegeName: 'FLorida State University',
        location: 'Tallahassee,FL',
        image: '',
        acceptanceRate: 32,
        ranking: 55,
      }),
    };
    fetch(
      `http://localhost:8080/add-requested-college-to-college-db`,
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

  useEffect(() => {
    getAllRequestedColleges();
    addRequestedCollegetoCollegeDB();
  }, []);

  return (
    <div className="addCollegeContainer">
      {thanks ? (
        <div className="collegeSubmissionThanksContainer">
          <p className="thanksText">
            Thanks for your submission!
            <br />
            <span className="thanksTextSubHeadline">
              We look forward to adding your college soon!
            </span>
          </p>
        </div>
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
