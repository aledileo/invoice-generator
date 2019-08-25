import React from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { makeStyles } from '@material-ui/core/styles';

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

const rows = [
  {
    id: 1,
    name: 'Dell XPS 13',
    price: 1000
  },
  {
    id: 2,
    name: 'Apple MacBook Pro 2019',
    price: 3500
  },
  {
    id: 3,
    name: 'Razer Blade Stealth',
    price: 4000
  },
  {
    id: 4,
    name: 'Microsoft Surface',
    price: 1200
  },
  {
    id: 5,
    name: 'Lenovo Yoga',
    price: 1500
  },
  {
    id: 6,
    name: 'Acer Chromebook 201',
    price: 200
  },
  {
    id: 7,
    name: 'Lenovo Thinkpad Carbon X1',
    price: 3000
  },
  {
    id: 8,
    name: 'Apple MacBook Air',
    price: 1500
  },
]

const ItemsTable = () => {
  const classes = useStyles();
  const subtotal = rows.reduce((acc, val) => acc + val.price, 0)
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
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">1</TableCell>
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
      <Typography variant="h2">
        Summary
      </Typography>
      
      <ItemsTable />

    </div>
  )
}

export default Summary;
