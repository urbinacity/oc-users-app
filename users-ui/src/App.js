import React from 'react';
import Dashboard from './containers/Dashboard';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ProfilePage from './containers/ProfilePage';
import HomeHero from './components/HomeHero';
import Navbar from './components/Navbar';
import { RoutesPaths } from './constants';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute, ProvideAuth } from './containers/ProviderAuth';
import { CssBaseline } from '@material-ui/core';

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route path={RoutesPaths.LOGIN_PATH} component={LoginPage} />
            <Route path={RoutesPaths.REGISTER_PATH} component={RegisterPage} />
            <PrivateRoute path={RoutesPaths.DASHBOARD_PATH} component={Dashboard} />
            <PrivateRoute path={RoutesPaths.PROFILE_PATH} component={ProfilePage} />
            <Route path={RoutesPaths.HOME_PATH} component={HomeHero} exact={true} />
            <Redirect to={RoutesPaths.HOME_PATH} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
};
