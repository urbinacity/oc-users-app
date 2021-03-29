import React, { useState } from 'react';
import { LoginForm } from '../components/Forms';
import { login } from '../actions/AuthActions';
import { RoutesPaths } from '../constants';
import { useAuth } from '../containers/ProviderAuth';

export default function LoginPage() {
  const [message, setMessage] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState(null);
  let auth = useAuth();

  async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(event.target);
    const payload = {
      username: form.get('username'),
      password: form.get('password'),
    };

    setFetching(true);
    const [ userData, message ] = await login({ data: payload });
    setUser(userData);
    setMessage(message);

    if(userData && userData.id) {
      setDisabled(true);

      auth.saveSession(userData, () => {
        window.location.assign(
          window.location.origin + RoutesPaths.DASHBOARD_PATH
        );
      });
    }

    setFetching(false);
  };

  return (
    <LoginForm
      onSubmit={handleSubmit}
      data={user}
      message={message}
      fetching={fetching}
      disabled={disabled}
    />
  );
};