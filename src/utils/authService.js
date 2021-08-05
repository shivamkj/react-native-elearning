import {removeHeader, setHeader} from '../api/client';
import {removeUser, storeAuthDetails, storeUserDetails} from './authStorage';

const logoutUser = async (dispatch) => {
  await removeHeader();
  await removeUser();
  await dispatch({type: 'auth', payload: false});
};

const loginUser = async (userId, accessToken, fullName, email, dispatch) => {
  await setHeader(userId, accessToken);
  await storeUserDetails(fullName, email);
  await storeAuthDetails(userId, accessToken);
  await dispatch({type: 'auth', payload: true});
};

export {loginUser, logoutUser};
