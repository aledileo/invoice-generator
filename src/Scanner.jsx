import React, { useEffect } from 'react'
import Quagga from 'quagga';

const quaggaOpts = {
  inputStream: {
    type : "LiveStream",
    constraints: {
      width: 640,
      height: 480,
      facingMode: "environment"
    }
  },
  locator: {
    patchSize: "medium",
    halfSample: true
  },
  numOfWorkers: 1,
  decoder: {
      readers : [ "code_128_reader"]
  },
  locate: true
};

const quaggaCallback = err => {
  if (err) {
    return console.log(err)
  }
  Quagga.start();
}

function Scanner({ setIsScanning, isScanning, setResult }) {
  useEffect(() => {
    Quagga.init(quaggaOpts, quaggaCallback);
    Quagga.onDetected(result => {
      setIsScanning(false);
      setResult(result);
    });
    return () => Quagga.stop();
  }, [isScanning]);
  return (
    <div id="interactive" className="viewport" />
  )
}

export default Scanner;