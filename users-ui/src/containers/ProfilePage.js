import React, { useState, useEffect } from 'react';
import { ProfileForm } from '../components/Forms';
import AccountDialog  from '../components/AccountDialog';
import { deleteUser, updateUser } from '../actions/UserActions';
import { useAuth } from '../containers/ProviderAuth';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [values, setValues] = useState(null);
  const [dialog, setDialog] = useState(false);
  let auth = useAuth();

  useEffect(() => {
    async function fetchUser() {
      setFetching(true);

      if(values) {
        const [ userData, message ] = await updateUser({ key: auth.user.id, data: values });
        setUser(userData);
        setMessage(message);

        if(userData && userData.id) {
          auth.saveSession(userData);
        }
      }

      setFetching(false);
    }

    fetchUser();
  }, [values, auth]);

  async function handleDelete(event){
    event.preventDefault();

    if(auth.user.id) {
      setFetching(true);

      const [ userData, message ] = await deleteUser({ key: auth.user.id });
      setUser(userData);
      setMessage(message);

      setFetching(false);

      auth.clearSession();
    }
  };

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

  return auth.user && (
    <React.Fragment>
      <ProfileForm
        onSubmit={handleSubmit}
        openDialog={setDialog}
        data={user}
        initialValues={auth.user}
        message={message}
        fetching={fetching}
      />
      <AccountDialog
        open={dialog}
        openDialog={setDialog}
        onConfirm={handleDelete}
        fetching={fetching}
      />
    </React.Fragment>
  );
};