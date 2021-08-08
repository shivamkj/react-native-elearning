import React, {useEffect, useState} from 'react';
import {getNotifications} from '../api/afterPurchase';
import {
  LoadingIndicator,
  ScreenContainer,
  TopHeader,
  withEmptyState,
} from '../components';
import {useGlobalContext} from '../utils/globalContext';

const NotificationScreen = ({navigation, setEmpty}) => {
  const {paidCourses} = useGlobalContext();
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    if (paidCourses.length == 0) {
      setEmpty({
        name: 'Notification',
        title: 'No Notification',
        description: 'There is no new notification yet!',
      });
    } else {
      getNotifications().then(result => {
        console.log(result.data);
        setNotifications(true);
      });
    }
  }, []);

  if (notifications == null) return <LoadingIndicator />;

  return (
    <ScreenContainer>
      <TopHeader title="Notification" onBackPress={navigation.goBack} />
    </ScreenContainer>
  );
};

export default withEmptyState(NotificationScreen);
