import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { RoutesPaths } from '../constants';
import { useAuth } from '../containers/ProviderAuth';

import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '64px',
  },
  toolbar: {
    minHeight: '64px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
});

function UserMenu(auth) {
  const classes = useStyles();

  return <React.Fragment>
    <Typography color="inherit" noWrap className={classes.title}>
      <Button color="inherit" href={RoutesPaths.DASHBOARD_PATH}>Dashboard</Button>
    </Typography>
    <IconButton href={RoutesPaths.PROFILE_PATH} aria-label="user profile" color="inherit">
      <AccountCircle />
    </IconButton>
    <IconButton onClick={() => auth.clearSession()} aria-label="user logout" color="inherit">
      <ExitToAppIcon />
    </IconButton>
  </React.Fragment>
}

function GuestMenu() {
  const classes = useStyles();

  return <React.Fragment>
    <Typography color="inherit" noWrap className={classes.title}>
      <Button color="inherit" href={RoutesPaths.HOME_PATH}>Home</Button>
    </Typography>
    <Button href={RoutesPaths.LOGIN_PATH} color="inherit">Login</Button>
    <Button href={RoutesPaths.REGISTER_PATH} color="inherit">Register</Button>
  </React.Fragment>
}

function Navbar() {
  const classes = useStyles();
  const auth = useAuth();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          {
            auth.user ? UserMenu(auth) : GuestMenu()
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;