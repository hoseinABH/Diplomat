import { userTypes } from '../types/userTypes';
import axios from 'axios';
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.userLoginRequest,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      {
        email,
        password,
      },
      config
    );
    dispatch({ type: userTypes.userLoginSuccess, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userTypes.userLoginFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.userRegisterRequest,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users',
      {
        name,
        email,
        password,
      },
      config
    );
    dispatch({ type: userTypes.userRegisterSuccess, payload: data });
    dispatch({ type: userTypes.userLoginSuccess, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userTypes.userRegisterFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: userTypes.userLogout });
};
