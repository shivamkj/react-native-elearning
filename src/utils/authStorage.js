import AsyncStorage from '@react-native-async-storage/async-storage';

const authKey = 'authDetails';
const detailsKey = 'userDetails';
let userDetails;
let authDetails;

const storeUserDetails = (fullName, email) => {
  return AsyncStorage.setItem(detailsKey, JSON.stringify({fullName, email}))
    .then((_) => (userDetails = {fullName, email}))
    .catch(() => console.error('Error while storing'));
};

const storeAuthDetails = (userId, authToken) => {
  return AsyncStorage.setItem(authKey, JSON.stringify({userId, authToken}))
    .then((_) => (authDetails = {userId, authToken}))
    .catch(() => console.error('Error while storing'));
};

const getUserDetails = () => {
  if (userDetails != undefined) return userDetails;
  return AsyncStorage.getItem(detailsKey)
    .then((result) => {
      if (!result) {
        userDetails = null;
        return null;
      }
      userDetails = JSON.parse(result);
      return userDetails;
    })
    .catch(() => console.error('Error while fetching'));
};

const getAuthDetails = () => {
  if (authDetails != undefined) return authDetails;
  return AsyncStorage.getItem(authKey)
    .then((result) => {
      if (!result) {
        authDetails = null;
        return null;
      }
      authDetails = JSON.parse(result);
      return authDetails;
    })
    .catch(() => console.error('Error while fetching'));
};

const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(authKey);
    await AsyncStorage.removeItem(detailsKey);
  } catch {
    console.error('Error while removing');
  } finally {
    userDetails = undefined;
    authDetails = undefined;
  }
};

export {
  getAuthDetails,
  getUserDetails,
  storeAuthDetails,
  storeUserDetails,
  removeUser,
};
