import * as types from '../actions/appActions';

const initialState = {
  fontLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FONT_LOADED:
      return {
        ...state,
        fontLoaded: action.payload.fontLoaded,
      };
    default:
      return state;
  }
};
