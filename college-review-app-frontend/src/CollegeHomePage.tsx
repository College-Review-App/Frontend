import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";

function CollegeHomePage() {
  
  let { collegeName } = useParams();

  const getInformationForCollege = () => {
    const requestOptions = {
      method: 'GET',
      // headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:8080/find-applications-by-college-name?collegeName=${collegeName}`, requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log(data)
      })
      .catch(error => {
          console.log('There was an error!', error);
      });
  }

  useEffect(() => {
    getInformationForCollege();
  }, [])
  

  return (
    <div>
        This is the page for {collegeName}
    </div>
  )
}

export default CollegeHomePage