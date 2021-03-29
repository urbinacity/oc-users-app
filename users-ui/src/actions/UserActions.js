import axios from '../axios';
import { ApiPaths } from '../constants';

export async function getUsers() {
  const response = await axios.get(ApiPaths.USERS_PATH)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);

      return [];
    });

  return response;
};

export async function getUser(params) {
  const response = await axios.get(ApiPaths.USER_PATH.replace(':userId', params.key))
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);

      return [];
    });

  return response;
};

export async function updateUser(params) {
  const response = await axios.put(ApiPaths.USER_PATH.replace(':userId', params.key), params.data)
    .then(function(response) {
      return [response.data, `Updated succesfully.`];
    })
    .catch(function(error) {
      return [null, error.alertMessage];
    });

  return response;
};

export async function deleteUser(params) {
  const response = await axios.delete(ApiPaths.USER_PATH.replace(':userId', params.key))
    .then(function(response) {
      return [response.data, response.data.message];
    })
    .catch(function(error) {
      return [null, error.alertMessage];
    });

  return response;
};