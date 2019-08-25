import React from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ProductContext from "../contexts/ProductContext";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    maxWidth: '50vw'
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  return (<span>{name}</span>);
}

const BottomBar = ({ cameraHandler, isScanning }) => {
  const { product, error, isLoading } = React.useContext(ProductContext);
  const classes = useStyles();

  return (
    <Paper className={classes.buttonWrapper}>
      <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        onClick={cameraHandler}
      >
        { isScanning ? 'Stop' : 'Scan item' }
      </Button>
      <Button
        variant='outlined'
        color='secondary'
        className={classes.button}
      >
        Generate Invoice
      </Button>
      {/* <ProductLabel
        name={product.name}
        isLoading={isLoading}
        error={error}
      /> */}
    </Paper>
  );
}

export default BottomBar;