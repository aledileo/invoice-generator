import React from 'react';
import QrScanner from 'qr-scanner';
import QrScannerWorkerPath from "!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js";
import { makeStyles } from '@material-ui/core/styles';
import ProductContext from '../contexts/ProductContext';

QrScanner.WORKER_PATH = QrScannerWorkerPath;

const useStyles = makeStyles(theme => ({
  videoWrapper: {
    margin: '8px auto',
    width: '90vw'
  },
  video: {
    width: "90vw",
  }
}));

function Scanner({ setIsScanning, isScanning }) {
  
  const { handleProductRequest } = React.useContext(ProductContext);

  let videoElement;
  let qrScanner;

  React.useEffect(() => {
    qrScanner = new QrScanner(videoElement, result => {
      setIsScanning(false);
      handleProductRequest(result);
    });
    qrScanner.start(); 
    return () => {
      qrScanner.destroy();
      qrScanner = null;
    };
  }, [isScanning]);

  const classes = useStyles();
  return (
    <div className={classes.videoWrapper}>
      <video
        ref={el => videoElement = el}
        className={classes.video}
      />
    </div>
  )
}

export default Scanner;