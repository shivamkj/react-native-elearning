import client from './client';

const createAccessToken = () => client.get('payment/create_access_token');

const makePaymentRequest = (accessToken, userId, courseId, coupon) =>
  client.get('payment/payment_request', {
    params: {
      access_token: accessToken,
      userid: userId,
      course_id: courseId,
      coupon,
    },
  });

const checkPaymentStatus = paymentId =>
  client.get('insta/check_mobile_status', {params: {payment_id: paymentId}});

const checkCoupon = (couponCode, courseId) =>
  client.post('payment/coupon_apply', {
    coupon: couponCode,
    course_id: courseId,
  });

const getPaymentHistory = () => client.get('home/get_payments');

export {
  createAccessToken,
  makePaymentRequest,
  checkPaymentStatus,
  getPaymentHistory,
  checkCoupon,
};
