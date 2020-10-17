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
