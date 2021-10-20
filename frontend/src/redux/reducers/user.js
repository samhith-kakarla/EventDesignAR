import * as types from '../actions/userActions';

const initialState = {
  user: null,
  spotifyProfileURL: '',
  isAuthenticated: false,
  backendFetched: false,
  backendError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    case types.SET_SPOTIFY_PROFILE_URL:
      return {
        ...state,
        spotifyProfileURL: action.payload.spotifyProfileURL,
      };
    case types.BACKEND_FETCHED:
      return {
        ...state,
        backendFetched: true,
      };
    case types.BACKEND_ERROR:
      return {
        ...state,
        backendError: true,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case types.UNSET_USER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
