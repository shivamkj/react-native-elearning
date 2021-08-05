import client from './client';

const checkEmail = (email) =>
  client.get('reg_login/check_email', {params: {email}});

const login = (email, password) =>
  client.get('login/checklogin', {params: {email, password}});

const genrateOtp = (email) =>
  client.get('reg_login/generate_otp', {params: {email}});

const verifyOtp = (email, otp, userId) =>
  client.get('reg_login/verifyotp', {params: {email, otp, userid: userId}});

const addDetails = (userId, firstName, lastName, mobile, password) =>
  client.get('reg_login/add_details', {
    params: {
      userid: userId,
      fname: firstName,
      lname: lastName,
      mobile,
      password,
    },
  });

const changePassword = (oldPassword, newPassword) =>
  client.get('home/update_password', {
    params: {old_password: oldPassword, new_password: newPassword},
  });

const resetPassword = (email) =>
  client.get('reg_login/forgot_password', {params: {email}});

const getProfilePic = () => client.get('home/get_profile_pic');

const uploadProfilePic = (profilePicBase64) =>
  client.get('home/upload_profile_pic', {
    params: {profile_data: 'base64,' + profilePicBase64},
    headers: {'Content-Type': 'x-www-form-urlencoded'},
  });

export {
  checkEmail,
  login,
  genrateOtp,
  verifyOtp,
  addDetails,
  changePassword,
  resetPassword,
  getProfilePic,
  uploadProfilePic,
};
