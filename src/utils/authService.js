import { getPurchasedCourses } from '../api/afterPurchase';
import {removeHeader, setHeader} from '../api/client';
import {removeUser, storeAuthDetails, storeUserDetails} from './authStorage';

const logoutUser = async dispatch => {
  await removeHeader();
  await removeUser();
  dispatch({type: 'paidCourses', payload: []});
  await dispatch({type: 'auth', payload: false});
};

const loginUser = async (userId, accessToken, fullName, email, dispatch) => {
  await setHeader(userId, accessToken);
  await storeUserDetails(fullName, email);
  await storeAuthDetails(userId, accessToken);
  const {data} = await getPurchasedCourses();
  if (data.response == 100 && data.course.length >= 1) {
    dispatch({type: 'paidCourses', payload: data.course});
  }
  await dispatch({type: 'auth', payload: true});
};

export {loginUser, logoutUser};
