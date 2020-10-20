import { userTypes } from '../types/userTypes';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.userLoginRequest:
      return { loading: true };

    case userTypes.userLoginSuccess:
      return { loading: false, userInfo: action.payload };

    case userTypes.userLoginFailure:
      return { loading: false, errors: action.payload };
    case userTypes.userLogout:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.userRegisterRequest:
      return { loading: true };

    case userTypes.userRegisterSuccess:
      return { loading: false, userInfo: action.payload };

    case userTypes.userRegisterFailure:
      return { loading: false, errors: action.payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case userTypes.userDetailsRequest:
      return { ...state, loading: true };
    case userTypes.userDetailsSuccess:
      return { loading: false, user: action.payload };
    case userTypes.userDetailsFailure:
      return { loading: false, errors: action.payload };

    default:
      return state;
  }
};

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.updateProfileRequest:
      return { loading: true };

    case userTypes.updateProfileSuccess:
      return { loading: false, success: true, userInfo: action.payload };

    case userTypes.updateProfileFailure:
      return { loading: false, errors: action.payload };

    default:
      return state;
  }
};
