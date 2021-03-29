import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { RoutesPaths } from '../constants';

import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  gridContainer: {
    margin: '8px -8px 0',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    whiteSpace: 'pre-wrap',
  },
}));

function FormContainer(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.title}
        </Typography>
        <form className={classes.form} onChange={props.onChange} onSubmit={props.onSubmit}>
          {
            props.message && !props.fetching &&
            <Alert className={classes.alert} severity={props.data ? "success" : "error"}>{ props.message }</Alert>
          }
          {
            props.children
          }
        </form>
      </div>
    </Container>
  );
}

export function LoginForm(props) {
  const classes = useStyles();

  return (
    <FormContainer title={'Login'} {...props}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={props.fetching || props.disabled}
        className={classes.submit}
      >
        Submit
      </Button>
      <Grid container>
        <Grid item>
          <Link href={RoutesPaths.REGISTER_PATH} variant="body2">
            {"Don't have an account? Register here"}
          </Link>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export function RegisterForm(props) {
  const classes = useStyles();

  return (
    <FormContainer title={'Register'} {...props}>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={props.fetching || props.disabled}
        className={classes.submit}
      >
        Submit
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href={RoutesPaths.LOGIN_PATH} variant="body2">
            Already have an account? Login
          </Link>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export function ProfileForm(props) {
  const classes = useStyles();
  const { firstName, lastName, username } = props.initialValues || {};

  return (
    <FormContainer title={'Profile'} {...props}>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
          <TextField
            defaultValue={firstName}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            defaultValue={lastName}
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            defaultValue={username}
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={props.fetching || props.disabled}
        className={classes.submit}
      >
        Submit
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link onClick={() => props.openDialog(true)} variant="body2" color="secondary">
            Delete my account
          </Link>
        </Grid>
      </Grid>
    </FormContainer>
  );
}
