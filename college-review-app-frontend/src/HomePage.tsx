import React, { useEffect } from 'react'

function HomePage() {

    const addCollege = () => {
        const requestOptions = {
          method: 'POST',
          // headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ college_name : 'University of Utah', GPA: 2.89 })
        };
        fetch('http://localhost:8080/add-college', requestOptions)
          .then(async response => {
            const data = await response.json();
            console.log(data)
          })
          .catch(error => {
              console.log('There was an error!', error);
          });
      }


  return (
    <div>
        <button onClick={() => addCollege()}>Add College</button>
    </div>  
  )
}

export default HomePage