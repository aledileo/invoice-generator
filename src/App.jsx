import React, { useState } from 'react';
import Scanner from "./Scanner";


function App() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState('');
  const cameraHandler = () => setIsScanning(prevState => !prevState);
  return (
    <>
      <pre>{JSON.stringify(result, null, 2)}</pre>
      {
        isScanning ? 
        <Scanner
          setIsScanning={setIsScanning}
          isScanning={isScanning}
          setResult={setResult}
        /> : null
      }
      <button onClick={cameraHandler}>
        { isScanning ? 'Stop' : 'Start' }
      </button>
    </>
  )
}

export default App;