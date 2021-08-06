import Toast from 'react-native-simple-toast';

const showToast = message => Toast.show(message);

const isValidEmail = email =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export {showToast, isValidEmail};
