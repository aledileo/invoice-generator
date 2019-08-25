import React from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { makeStyles } from '@material-ui/core/styles';
import ProductContext from "../contexts/ProductContext";

const useStyles = makeStyles(theme => ({
  summaryContainer: {
    margin: theme.spacing(1)
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(9),
    overflowX: 'auto',
  },
}));

const ItemsTable = () => {
  const classes = useStyles();
  const { products, error, isLoading } = React.useContext(ProductContext);
  const subtotal = products.reduce((acc, val) => acc + val.price, 0)
  
  if (Boolean(!products.length)) {
    return (
      <>
        <Typography variant="body1" align="center">
          There are no scanned products yet!
        </Typography>
        <Typography variant="body1" align="center">
          Press 'Scan Item' and start adding items
        </Typography>
      </>
    );
  }
  
  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product name</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.qty || 1}</TableCell>
              <TableCell align="right">${row.price}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell>Subtotal</TableCell>
            <TableCell />
            <TableCell align="right">${subtotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};


const Summary = () => {
  const classes = useStyles();
  return (
    <div className={classes.summaryContainer}>
      <Typography variant="h2" gutterBottom>
        Summary
      </Typography>
      
      <ItemsTable />

    </div>
  )
}

export default Summary;
