import client from './client';

// Instamojo Payment
const createAccessToken = () => client.get('payment/create_access_token');

const makePaymentRequest = (accessToken, userId, courseId) =>
  client.get('payment/payment_request', {
    params: {access_token: accessToken, userid: userId, course_id: courseId},
  });

const checkPaymentStatus = (paymentId) =>
  client.get('insta/check_mobile_status', {params: {payment_id: paymentId}});

const getPaymentHistory = () => client.get('home/get_payments');

export {
  createAccessToken,
  makePaymentRequest,
  checkPaymentStatus,
  getPaymentHistory,
};
