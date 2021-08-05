import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, TouchableWithoutFeedback} from 'react-native';
import {getProfilePic, uploadProfilePic} from '../api/auth';
import {ProfileIcon} from '../assets/icons';
import Text from './Text';
import {launchImageLibrary} from 'react-native-image-picker';
import {showToast} from '../utils/functions';

const Name = ({userDetails}) => {
  if (!userDetails) return null;
  else if (userDetails == 'NOT_LOGED_IN')
    return (
      <Text style={styles.name}>Sign in / Register to access your account</Text>
    );
  else
    return (
      <View>
        <Text style={styles.name}>{userDetails.fullName}</Text>
        <Text style={styles.email}>{userDetails.email}</Text>
      </View>
    );
};

const ProfileImage = ({userDetails, size, uploadDisabled = true}) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (userDetails == 'NOT_LOGED_IN') return;
    getProfile();
  }, []);

  const getProfile = () => {
    getProfilePic().then((result) => setImageUrl(result.data.profile_pic));
  };

  const uploadProfile = () => {
    if (userDetails == 'NOT_LOGED_IN' || uploadDisabled) return;
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 80,
        maxHeight: 80,
        includeBase64: true,
      },
      (response) => {
        if (response.didCancel || response.errorCode) return;
        uploadProfilePic(response.base64).then((result) => {
          if (result.data.response == 100) setImageUrl(result.data.profile);
          else showToast('Error Uploading Image. Please try again.');
        });
      },
    );
  };

  if (imageUrl == null)
    return <ProfileIcon size={size} onPress={uploadProfile} />;
  else
    return (
      <TouchableWithoutFeedback onPress={uploadProfile}>
        <Image
          source={{uri: imageUrl}}
          style={[
            styles.profileImage,
            {height: size, width: size, borderRadius: size / 2},
          ]}
        />
      </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Bold-700',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
  },
  email: {
    fontSize: 15,
    color: '#00000050',
    textAlign: 'center',
  },
  profileImage: {
    overflow: 'hidden',
    marginHorizontal: 6,
  },
});

export {ProfileImage, Name};
