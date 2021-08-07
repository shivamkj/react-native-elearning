import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import CourseDetailsScreen from '../screens/courses/CourseDetails';
import TestInstruction from '../screens/test/TestInstruction';
import CourseStructureScreen from '../screens/courses/CourseStructure';
import TestResultScreen from '../screens/test/TestResult';
import NewsScreen from '../screens/NewsScreen';
import MoreScreen from '../screens/more/MoreScreen';
import HelpAndSupport from '../screens/more/HelpAndSupport';
import NoteSingleScreen from '../screens/notes/NoteSingle';
import NotesListingScreen from '../screens/notes/NotesListing';
import TestScreen from '../screens/test/Test';
import EditNoteScreen from '../screens/notes/EditNote';
import TestRecordScreen from '../screens/test/TestRecord';
import PaymentHistoryScreen from '../screens/payments/PaymentHistory';
import ChangePasswordScreen from '../screens/auth/ChangePassword';
import CourseContentScreen from '../screens/courses/CourseContent';
import TestOverviewScreen from '../screens/test/TestOverview';
import PaymentDetailsScreen from '../screens/payments/PaymentDetails';
import ViewMoreScreen from '../screens/courses/ViewMore';
import PdfViewerScreen from '../screens/courses/PdfViewer';
import VideoPlayerScreen from '../screens/courses/VideoPlayer';
import AnswerSheetScreen from '../screens/test/AnswerSheet';
import TestReportScreen from '../screens/test/TestReport';
import MyNotesScreen from '../screens/notes/MyNotes';
import RecordsByCourses from '../screens/test/RecordsByCourses';
import InstamojoPaymentScreen from '../screens/payments/InstamojoPayment';
import PaymentStatusScreen from '../screens/payments/PaymentStatus';
import LiveStreamScreen from '../screens/courses/LiveStream';
import TopCoursesScreen from '../screens/explore/TopCoursesScreen';
import FreeResourcesScreen from '../screens/explore/FreeResourcesScreen';

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Home" component={TabNavigator} />
    <AppStack.Screen name="TopCourses" component={TopCoursesScreen} />
    <AppStack.Screen name="FreeResources" component={FreeResourcesScreen} />
    <AppStack.Screen name="CourseDetails" component={CourseDetailsScreen} />
    <AppStack.Screen name="TestInstruction" component={TestInstruction} />
    <AppStack.Screen name="CourseStructure" component={CourseStructureScreen} />
    <AppStack.Screen name="CourseContent" component={CourseContentScreen} />
    <AppStack.Screen name="LiveStream" component={LiveStreamScreen} />
    <AppStack.Screen name="MyNotes" component={MyNotesScreen} />
    <AppStack.Screen name="RecordsByCourses" component={RecordsByCourses} />
    <AppStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    <AppStack.Screen name="PaymentHistory" component={PaymentHistoryScreen} />
    <AppStack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
    <AppStack.Screen
      name="InstamojoPayment"
      component={InstamojoPaymentScreen}
    />
    <AppStack.Screen name="PaymentStatus" component={PaymentStatusScreen} />
    <AppStack.Screen name="Test" component={TestScreen} />
    <AppStack.Screen name="ViewMore" component={ViewMoreScreen} />
    <AppStack.Screen name="PdfViewer" component={PdfViewerScreen} />
    <AppStack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
    <AppStack.Screen name="News" component={NewsScreen} />
    <AppStack.Screen name="TestOverview" component={TestOverviewScreen} />
    <AppStack.Screen name="TestResult" component={TestResultScreen} />
    <AppStack.Screen name="TestReport" component={TestReportScreen} />
    <AppStack.Screen name="AnswerSheet" component={AnswerSheetScreen} />
    <AppStack.Screen name="NotesListing" component={NotesListingScreen} />
    <AppStack.Screen name="NoteSingle" component={NoteSingleScreen} />
    <AppStack.Screen name="EditNote" component={EditNoteScreen} />
    <AppStack.Screen name="TestRecord" component={TestRecordScreen} />
    <AppStack.Screen name="More" component={MoreScreen} />
    <AppStack.Screen name="HelpAndSupport" component={HelpAndSupport} />
  </AppStack.Navigator>
);

export default AppNavigator;
