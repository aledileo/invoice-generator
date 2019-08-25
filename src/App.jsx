import React, { useState } from 'react';
import Scanner from './components/Scanner';
import BottomBar from './components/BottomBar';
import Summary from './components/Summary';

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
        /> : <Summary />
      }
      <BottomBar
        cameraHandler={cameraHandler}
        isScanning={isScanning}
      /> 
    </>
  )
}

export default App;