import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText as Text, ScreenContainer} from '../../components';
import BackArrow from '../../assets/icons/BackArrow';
import Edit from '../../assets/icons/Edit';

const NoteSingleScreen = ({navigation, route: {params}}) => {
  const handleEdit = () =>
    navigation.navigate('EditNote', {
      type: 'UPDATE',
      noteContent: params.noteContent,
      noteId: params.noteId,
    });

  return (
    <ScreenContainer>
      <View style={styles.topBar}>
        <BackArrow onPress={navigation.goBack} color="#000000" />
        <Text style={styles.title} numberOfLines={1}>
          {params.title}
        </Text>
        <Edit onPress={handleEdit} />
      </View>
      <Text style={styles.notes}>{params.noteContent}</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  title: {
    fontFamily: 'SemiBold-600',
    fontSize: 17,
    maxWidth: '80%',
  },
  notes: {
    padding: 14,
    fontSize: 18,
  },
});

export default NoteSingleScreen;
