// CSS
import './AddCollegePage.css';
import { useState } from 'react';

const AddCollegePage = () => {
  //state fields
  const [addCollegeText, setAddCollegeText] = useState<string>('');

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

  return (
    <form>
      <input
        className="addCollegeInput"
        name="Add College"
        type="text"
        value={addCollegeText}
        onChange={(text) => setAddCollegeText(text.target.value)}
      />
      <div onClick={() => addNewCollege()}>Hello</div>
    </form>
  );
};

export default AddCollegePage;
