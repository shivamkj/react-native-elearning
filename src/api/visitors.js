import client from './client';

const getBanner = () => client.get('home/get_banner');

const getCourses = examTypeId =>
  client.get('visitor/get_popular_courses_and_free_resourses', {
    params: {exam_type_id: examTypeId || null},
  });

const getCourseDetails = courseId =>
  client.get('visitor/get_course_details', {params: {course_id: courseId}});

const getCoursePhases = courseId =>
  client.get('visitor/get_phase_by_course', {params: {course_id: courseId}});

const getCourseStructure = (courseId, phaseId) =>
  client.get('visitor/course_structure', {
    params: {course_id: courseId, phase_id: phaseId},
  });

const getPurchaseDetails = courseId =>
  client.get('visitor/purchase_course', {params: {course_id: courseId}});

const getExamTypes = () => client.get('visitor/get_exam_types');

const getSupportDetails = () => client.get('home/get_support_help');

export {
  getBanner,
  getCourses,
  getCourseDetails,
  getCourseStructure,
  getPurchaseDetails,
  getSupportDetails,
  getCoursePhases,
  getExamTypes,
};
