import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Name, ProfileImage} from '../../../components/Profile';
import {getUserDetails} from '../../../utils/authStorage';
import {useGlobalContext} from '../../../utils/globalContext';

const Profile = () => {
  const [userDetails, setUserDetails] = useState();

  const {dispatch} = useGlobalContext();

  useEffect(() => {
    (async () => {
      const details = await getUserDetails();
      if (details == null) dispatch({type: 'auth', payload: false});
      else setUserDetails(details);
    })();
  }, []);

  if (userDetails == undefined) return null;
  return (
    <View style={styles.profileContainer}>
      <ProfileImage userDetails={userDetails} size={50} />
      <Name userDetails={userDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Profile;
