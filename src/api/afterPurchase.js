import client from './client';

const getMyCourses = () => client.get('course/get_paid_course');

const getPurchasedCourses = () => client.get('home/get_purchase_course_cnt');

const getPhases = courseId =>
  client.get('course/get_phase_by_course', {params: {course_id: courseId}});

const getCourseContent = (courseId, phaseId) =>
  client.get('course/purchased_course_content', {
    params: {course_id: courseId, phase_id: phaseId},
  });

const getFeed = courseId =>
  client.get('after_purchase/feeds', {params: {course_id: courseId}});

const getNotifications = () => client.get('notification/get_notification');

export {
  getMyCourses as getPaidCourses,
  getPurchasedCourses,
  getPhases,
  getCourseContent,
  getFeed,
  getNotifications,
};
