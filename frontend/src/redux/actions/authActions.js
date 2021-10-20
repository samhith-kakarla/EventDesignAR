// TYPES
export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
export const UNSET_AUTH_STATUS = 'UNSET_AUTH_STATUS';

// ACTIONS
export function setAuthStatus(userId, accessToken, refreshToken, expiresIn) {
  return {
    type: SET_AUTH_STATUS,
    payload: { userId, accessToken, refreshToken, expiresIn },
  };
}

export function unsetAuthStatus() {
  return { type: UNSET_AUTH_STATUS, payload: {} };
}
