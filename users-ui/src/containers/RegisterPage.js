import React, { useState, useEffect } from 'react';
import { RegisterForm } from '../components/Forms';
import { register } from '../actions/AuthActions';

export default function RegisterPage() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [values, setValues] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      setFetching(true);

      if(values) {
        const [ userData, message ] = await register({ data: values });
        setUser(userData);
        setMessage(message);

        if(userData && userData.id) {
          setDisabled(true);
        }
      }

      setFetching(false);
    }

    fetchUser();
  }, [values]);

  function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(event.target);

    setValues({
      firstName: form.get('firstName'),
      lastName: form.get('lastName'),
      username: form.get('username'),
      password: form.get('password'),
    });
  };

  return (
    <RegisterForm
      onSubmit={handleSubmit}
      data={user}
      message={message}
      fetching={fetching}
      disabled={disabled}
    />
  );
};