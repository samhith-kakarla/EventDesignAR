// TYPES
export const BACKEND_FETCHED = 'SET_BACKEND_FETCHED';
export const BACKEND_ERROR = 'BACKEND_ERROR';
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

// ACTIONS
export function backendFetched() {
  return { type: BACKEND_FETCHED, payload: {} };
}

export function backendError() {
  return { type: BACKEND_ERROR, payload: {} };
}

export function setUser(user) {
  return { type: SET_USER, payload: { user } };
}

export function unsetUser() {
  return { type: UNSET_USER, payload: {} };
}
