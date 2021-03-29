import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RoutesPaths } from '../constants';

import { Button, Grid, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            User Dashboard
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Welcome to the user dashboard!<br/>
            Please select one of the options below to get started.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button href={RoutesPaths.LOGIN_PATH} variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Button href={RoutesPaths.REGISTER_PATH} variant="outlined" color="primary">
                  Register
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default Home;