import * as types from '../actions/authActions';

const initialState = {
  userId: '',
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_STATUS:
      return {
        ...state,
        userId: action.payload.userId,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        expiresIn: action.payload.expiresIn,
      };
    case types.UNSET_AUTH_STATUS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
