import client from './client';

const getExam = (examId, eid) =>
  client.get('exam/get_exam', {params: {exam_id: examId, eid}});

const submitResult = (userResponse) =>
  client.get('exam/submit_result', {params: {user_response: userResponse}});

const getReport = (examId, eid) =>
  client.get('exam/get_result', {params: {exam_id: examId, eid}});

const getResult = (examId) =>
  client.get('Exam_analysis/get_analysis', {params: {exam_id: examId}});

const getTestRecords = () => client.get('exam/get_result_mobile');

export {getExam, submitResult, getResult, getReport, getTestRecords};
