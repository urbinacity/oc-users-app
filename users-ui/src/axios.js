import axios from 'axios';
import { API_BASE_URL } from './constants';

function formatErrorMessage(error) {
  if (error.response && error.response.data) {
    const { status, data: { message, errors } } = error.response;
    let msg = `${message} — ${status}`;

    if(errors && errors.length) {
      msg = msg + ':\n' + errors.join('\n')
    }

    return msg;
  } else {
    // Something happened in setting up the request that triggered an Error
    return `Error — ${error.message}`;
  }
}

const instance = axios.create({
    // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
    // xsrfCookieName: 'csrftoken',
    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    // xsrfHeaderName: 'X-CSRFToken',
    baseURL: API_BASE_URL,
    withCredentials: true,// Add a response interceptor
    timeout: 20000
});

// Add a response interceptor
instance.interceptors.response.use(null, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  error.alertMessage =  formatErrorMessage(error);
  return Promise.reject(error);
});

export default instance;
