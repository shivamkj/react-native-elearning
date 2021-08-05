import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyCoursesScreen from '../screens/courses/MyCourses';
import MoreScreen from '../screens/more/MoreScreen';
import NotificationScreen from '../screens/Notification';
import ExploreScreen from '../screens/explore/ExploreScreen';

// Vector Icons for bottom nav
import {ExploreSelected, ExploreUnselected} from '../assets/bottom-nav';
import {MoreSelected, MoreUnselected} from '../assets/bottom-nav';
import {MyCoursesSelected, MyCoursesUnselected} from '../assets/bottom-nav';
import {
  NotificationSelected,
  NotificationUnselected,
} from '../assets/bottom-nav';

const TabStack = createBottomTabNavigator();

const TabNavigator = () => (
  <TabStack.Navigator
    initialRouteName="ExploreStack"
    headerMode="none"
    tabBarOptions={{
      labelStyle: {fontSize: 11, fontFamily: 'SemiBold-600'},
      style: {
        height: 51,
        paddingBottom: 6,
      },
    }}>
    <TabStack.Screen
      name="MyCoursesStack"
      component={MyCoursesScreen}
      options={{
        title: 'My Courses',
        tabBarIcon: ({focused}) =>
          focused ? <MyCoursesSelected /> : <MyCoursesUnselected />,
      }}
    />

    <TabStack.Screen
      name="ExploreStack"
      component={ExploreScreen}
      options={{
        title: 'Explore',
        tabBarIcon: ({focused}) =>
          focused ? <ExploreSelected /> : <ExploreUnselected />,
      }}
      listeners={({navigation, _}) => ({
        tabPress: (e) => {
          e.preventDefault();
          if (navigation.canGoBack()) {
            navigation.reset({
              index: 0,
              routes: [{name: 'ExploreStack'}],
            });
          }
        },
      })}
    />

    <TabStack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        title: 'Notification',
        tabBarIcon: ({focused}) =>
          focused ? <NotificationSelected /> : <NotificationUnselected />,
      }}
    />

    <TabStack.Screen
      name="MoreStack"
      component={MoreScreen}
      options={{
        title: 'More',
        tabBarIcon: ({focused}) =>
          focused ? <MoreSelected /> : <MoreUnselected />,
      }}
    />
  </TabStack.Navigator>
);

export default TabNavigator;
