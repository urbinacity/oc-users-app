import React, { useContext, createContext, useState, useEffect } from "react";
import { RoutesPaths } from '../constants';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
};

export function PrivateRoute(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true)
  }, []);
  const auth = useAuth();
  const { component, ...rest } = props;

  return active && (
    <Route
      {...rest}
      component={ () => auth.user ? component() :
        <Redirect to={RoutesPaths.LOGIN_PATH} />
      }
    />
  );
};

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  useEffect(() =>  {
    const expireCookie = Cookies.get('expirems');
    if(!expireCookie || isNaN(expireCookie)) {
      return;
    }

    const interval = new Date(parseInt(expireCookie)).getTime() - new Date().getTime();
    if(interval < 100) {
      return clearSession();
    }

    setUser(JSON.parse(localStorage.getItem('user')));
    const timer = setTimeout(clearSession, interval);
    return () => {
      return clearTimeout(timer);
    }
  }, []);

  function saveSession(user, callback) {
    localStorage.setItem('user', JSON.stringify(user));
    if(callback) callback();
  }

  function clearSession() {
    localStorage.removeItem('user');
    Cookies.remove('expirems');
    Cookies.remove('token');
    setUser(null);
  }

  return {
    user,
    saveSession,
    clearSession
  };
};
