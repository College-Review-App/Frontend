import './App.css';
import RouterHQ from './RouterHQ';
import { useEffect, useState } from 'react';
import { setColleges } from './global';
import serverError from './serverError.png'
import WebFont from 'webfontloader';

function App() {
  // Boolean of whether the connection to the backend has succeeded.
  const [backendConnected, setBackendConnected] = useState<Boolean>(true);

  useEffect(() => {
    fetchCollegesOnRender();
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans', 'Poppins', 'Montserrat']
      }
    });
  }, [])

  const fetchCollegesOnRender = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:8080/get-colleges`, requestOptions)
      .then(async (response) => {
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
  };

  return <RouterHQ />

  // return backendConnected ? (
  //   <RouterHQ />
  // ) : (
  //   <div className="serverErrorContainer">
  //     <img className='serverErrorImage' src={serverError}/>
  //     <div className="serverErrorText">
  //       Don't panic! Seems like something is broken on our end! We are on it!
  //     </div>
  //   </div>
  // );
}

export default App;
