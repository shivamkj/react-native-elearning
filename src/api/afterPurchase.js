import client from './client';

const getMyCourses = () => client.get('course/get_paid_course');

const getPurchasedCourses = () => {
  return client.get('home/get_purchase_course_cnt');
};

const getPhases = courseId =>
  client.get('course/get_phase_by_course', {params: {course_id: courseId}});

const getCourseContent = (courseId, phaseId) =>
  client.get('course/purchased_course_content', {
    params: {course_id: courseId, phase_id: phaseId},
  });

const getFeed = () =>
  client.get('after_purchase/feeds', {params: {course_id: courseId}});

const getNews = courseId =>
  client.get('news/get_news', {params: {course_id: courseId}});

const filterNews = filterType =>
  client.get('news/filter_news', {request: filterType});

const getTestAnalysis = () => client.get('news/get_test_analysis');

const filterTestAnalysis = filterType =>
  client.get('news/filter_analysis_report', {params: {request: filterType}});

export {
  getMyCourses as getPaidCourses,
  getPurchasedCourses,
  getPhases,
  getCourseContent,
  getNews,
  getFeed,
  filterNews,
  getTestAnalysis,
  filterTestAnalysis,
};
