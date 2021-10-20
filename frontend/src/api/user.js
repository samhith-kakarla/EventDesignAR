import axios from 'axios';

import { API_URL } from '../config';
import { setUser as reduxSetUser } from '../redux/actions/userActions';

export const getUserInfo = async (userId) => {
  const url = `${API_URL}/user/get_user`;
  const params = { params: { userId } };

  try {
    const result = await axios.get(url, params);
    console.log(result.data.args);
    console.log(result.data.data);

    // TODO: Check if a user exists or not upon authentication

    // To Redux
    reduxSetUser(result.data.data);

    return '';
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createNewUser = async (user) => {
  const url = `${API_URL}/user/create_user`;
  const params = { params: { user } };

  try {
    const result = await axios.post(url, params);
    console.log(result.data.args);
    console.log(result.data.data);

    return result.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateUser = async (user) => {
  const url = `${API_URL}/user/update_user`;
  const params = { params: { user } };

  try {
    const result = await axios.post(url, params);
    console.log(result);

    return '';
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteUser = async (userId) => {
  const url = `${API_URL}/user/delete_user`;
  const params = { params: { userId } };

  try {
    const result = await axios.delete(url, params);
    console.log(result.data.data);

    return result.data.data ? 'Success' : 'Fail';
  } catch (error) {
    console.log(error);
    return error;
  }
};

// TYPES **

// export type CreateNewUser = {
//     userId: string;
//     email: string;
//     username: string;
// };

// export type UpdateUser = {
//     userId: string;
//     email: string;
//     username: string;
//     // Additional settings fields here
// }
