import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function TableContainer(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h2" variant="h6" color="primary">{props.title}</Typography>
          <Typography>{props.subtitle}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {props.children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}