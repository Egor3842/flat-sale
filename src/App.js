import React, { useState } from 'react';
import FlatsAbout from './Components/Flats/FlatsAbout';
import Preloader from './Components/Preloader/Preloader';

const App = () => {
  const [loadInfo,setInfo] = useState(true);
  setTimeout(()=>setInfo(false), 2000);
  return (
    <>
    {loadInfo ? <Preloader/>:
     <div>
     <FlatsAbout/>
    </div>
     }
    </>
  );
}

export default App;
