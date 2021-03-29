import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }
}));

export default function UsersTable(props) {
  const classes = useStyles();

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Registered</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Username</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((row) => (
          <TableRow key={row.id} className={classes.row}>
            <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
            <TableCell>{row.firstName}</TableCell>
            <TableCell>{row.lastName}</TableCell>
            <TableCell>{row.username}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}