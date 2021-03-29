import axios from '../axios';
import { ApiPaths } from '../constants';

export async function login(params) {
  const response = await axios.post(ApiPaths.LOGIN_PATH, params.data)
    .then(function(response) {
      return [response.data, `Welcome back, ${response.data.firstName}!`];
    })
    .catch(function(error) {
      return [null, error.alertMessage];
    });

  return response;
};

export async function register(params) {
  const response = await axios.post(ApiPaths.REGISTER_PATH, params.data)
    .then(function(response) {
      return [response.data, `Account registered, please login.`];
    })
    .catch(function(error) {
      return [null, error.alertMessage];
    });

  return response;
};
