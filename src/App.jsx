import React, { useState } from 'react';
import Scanner from "./components/Scanner";
import BottomBar from './components/BottomBar';


const App = () => {
  const [isScanning, setIsScanning] = useState(false);

  const cameraHandler = () => setIsScanning(prevState => !prevState);
  
  return (
    <>
      {
        isScanning ? 
        <Scanner
          setIsScanning={setIsScanning}
          isScanning={isScanning}
        /> : null
      }
      <BottomBar
        cameraHandler={cameraHandler}
        isScanning={isScanning}
      /> 
    </>
  )
}

export default App;