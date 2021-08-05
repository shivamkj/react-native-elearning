import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../config';
import {getUserDetails} from '../../../utils/authStorage';
import {ProfileImage, Name} from '../../../components/Profile';

const ProfileSection = () => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    (async () => {
      const details = await getUserDetails();
      setUserDetails(details || 'NOT_LOGED_IN');
    })();
  }, []);

  if (userDetails == undefined) return <View style={styles.profileLoading} />;
  return (
    <View style={styles.profileContainer}>
      <ProfileImage userDetails={userDetails} size={80} uploadDisabled={false} />
      <Name userDetails={userDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileLoading: {
    backgroundColor: colors.sectionBackground,
    height: 60,
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: colors.sectionBackground,
    paddingVertical: 32,
  },
});

export default ProfileSection;
