import './App.css';
import RouterHQ from './RouterHQ';
import { useEffect } from 'react';
import { setColleges } from './global';
import { useState } from 'react'; 


function App() {
  // Boolean of whether the connection to the backend has succeeded.
  const [backendConnected, setBackendConnected] = useState<Boolean>(true);

  useEffect(() => {
    fetchCollegesOnRender();
  }, [])

  const fetchCollegesOnRender = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:8080/get-colleges`, requestOptions)
      .then(async response => {
        const data = await response.json();
        setColleges(data);
      })
      .catch((error) => {
        // If this API fails, there is something wrong with our backend and
        // we should notify the user with an error message that prevents them
        // from using our website!!
        setBackendConnected(false);
        console.log('There was an error!', error);
      });
  }

  return (
    // (backendConnected ? 
      <RouterHQ />
    //   : 
    //   <h1>Failed</h1>
    // )
    
  );
}

export default App;
