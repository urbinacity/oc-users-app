export const RoutesPaths = {
  LOGIN_PATH: '/login',
  REGISTER_PATH: '/register',
  DASHBOARD_PATH: '/dashboard',
  PROFILE_PATH: '/profile',
  HOME_PATH: '/',
};

export const ApiPaths = {
  USERS_PATH: '/api/users',
  USER_PATH: '/api/users/:userId',
  REGISTER_PATH: '/api/auth/register',
  LOGIN_PATH: '/api/auth/login',
};

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:3000";
