import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {Alert, View} from 'react-native';
import {GlobalContext} from './utils/globalContext';
import {reducer, initialState} from './utils/globalReducer';
import RootNavigator from './navigation/RootNavigator';
import Orientation from 'react-native-orientation-locker';
import OfflineIndicator from './components/OfflineIndicator';
import SplashScreen from 'react-native-splash-screen';
import {getAuthDetails} from './utils/authStorage';
import {setHeader} from './api/client';
import {navigationRef} from './utils/notification';
import {configureNotification} from './utils/notification';
import Explore from './ShimmerLayouts/Explore';
import {getPurchasedCourses} from './api/afterPurchase';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const globalState = useMemo(
    () => ({dispatch, paidCourses: state.paidCourses}),
    [state.paidCourses],
  );
  const [isStarting, setStarting] = useState(true);

  useEffect(() => {
    const init = async () => {
      Orientation.lockToPortrait();
      const authDetails = await getAuthDetails();
      if (authDetails == null) dispatch({type: 'auth', payload: false});
      else setHeader(authDetails.userId, authDetails.authToken);
      configureNotification();
      const {data} = await getPurchasedCourses();
      if (data.response == 100 && data.course.length >= 1) {
        dispatch({type: 'paidCourses', payload: data.course});
      }
    };

    init().finally(() => {
      SplashScreen.hide();
      setStarting(false);
    });
  }, []);

  const showAlert = () =>
    Alert.alert('Error', JSON.stringify(state.error), [
      {text: 'OK', onPress: () => dispatch({type: 'error', payload: false})},
    ]);

  if (isStarting == true) return <View />;

  return (
    <>
      {state.error && showAlert()}
      {state.loading && <state.loading />}
      <GlobalContext.Provider value={globalState}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator isLoggedIn={state.isLoggedIn} />
        </NavigationContainer>
      </GlobalContext.Provider>
      <OfflineIndicator />
    </>
  );
};

export default App;
