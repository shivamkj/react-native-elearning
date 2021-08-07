import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  withEmptyState,
} from '../../components';
import {TopHeader, TouchableHighlights} from '../../components';
import {ListItemSeparator} from '../../components';
import {ArrowRight} from '../../assets/icons';
import {useGlobalContext} from '../../utils/globalContext';

const MyNotesScreen = ({navigation, route: {params}, setEmpty}) => {
  const {paidCourses} = useGlobalContext();

  useEffect(() => {
    if (paidCourses.length == 0) {
      setEmpty({
        name: params.title,
        title: 'No Data Available',
        description:
          'This feauture is available only for Premium users. Please login and Purchase course to make your notes.',
      });
    }
  }, []);

  const toNotesListing = item => {
    navigation.navigate('NotesListing', {
      title: item.course_title,
      courseId: item.course_id == '0' ? null : item.course_id,
    });
  };

  const withOtherNotes = () => {
    return [
      ...paidCourses,
      {
        course_id: '0',
        course_title: 'Other Notes',
      },
    ];
  };

  const renderItem = ({item}) => (
    <TouchableHighlights
      style={styles.item}
      onPress={() => toNotesListing(item)}>
      <Text style={styles.title} numberOfLines={2}>
        {item.course_title}
      </Text>
      <ArrowRight />
    </TouchableHighlights>
  );

  return (
    <ScreenContainer>
      <TopHeader title={params.title} onBackPress={navigation.goBack} />
      <FlatList
        data={withOtherNotes()}
        renderItem={renderItem}
        keyExtractor={item => item.course_id}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    flex: 0.9,
    fontFamily: 'SemiBold-600',
    fontSize: 17,
  },
});

export default withEmptyState(MyNotesScreen);
