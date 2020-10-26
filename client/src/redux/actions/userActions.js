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
      { email, password },
      config
    );

    dispatch({
      type: userTypes.userLoginSuccess,
      payload: data,
    });

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
      { name, email, password },
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
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  localStorage.removeItem('paymentMethod');
  dispatch({ type: userTypes.userLogout });
  dispatch({ type: userTypes.userDetailsReset });
  dispatch({ type: userTypes.userListReset });
  document.location.href = '/login';
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userTypes.userDetailsRequest,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: userTypes.userDetailsSuccess,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userTypes.userDetailsFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userTypes.updateProfileRequest,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: userTypes.updateProfileSuccess,
      payload: data,
    });
    dispatch({
      type: userTypes.userLoginSuccess,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userTypes.updateProfileSuccess,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
