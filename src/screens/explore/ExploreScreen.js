import React from 'react';
import {useGlobalContext} from '../../utils/globalContext';
import CoursesAndExams from './CoursesAndExams';
import Feed from './Feed';

const ExploreScreen = () => {
  const {paidCourses} = useGlobalContext();

  if (paidCourses.length == 0) return <CoursesAndExams />;
  return <Feed />;
};

export default ExploreScreen;
