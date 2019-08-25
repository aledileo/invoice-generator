import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ProductContext from "../contexts/ProductContext";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    maxWidth: '25vw'
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(1),
    width: '100vw',
    top: 'auto',
    bottom: 0,
    position: 'fixed'
  }
}));

const ProductLabel = ({ name, isLoading, error }) => {
  if (isLoading) return (<span>Loading...</span>)
  if (!isLoading && !name) return (<span>No products have been scanned yet</span>);
  if (error) return (<span>There's been an error, try again</span>);
  return <span>{name}</span>
}

const BottomBar = ({ cameraHandler, isScanning }) => {
  const { product, error, isLoading } = React.useContext(ProductContext);
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper}>
      <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        onClick={cameraHandler}
      >
        { isScanning ? 'Stop' : 'Start' }
      </Button>
      <ProductLabel
        name={product.name}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default BottomBar;