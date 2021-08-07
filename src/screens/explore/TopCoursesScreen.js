import React, {useState} from 'react';
import {StyleSheet, FlatList, TextInput, View} from 'react-native';
import {CustomText as Text, ScreenContainer, TopHeader} from '../../components';
import {Search} from '../../assets/icons';
import {colors} from '../../config';
import Courses from './views/CoursesH';

const TopCoursesScreen = ({route: {params}, navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterCourses = () => {
    if (searchQuery == '') return params.courses;
    const searchedCourse = searchQuery.toLowerCase();
    const filteredCourses = params.courses.filter(course => {
      if (course.course_title.toLowerCase().includes(searchedCourse))
        return true;
      return false;
    });
    return filteredCourses;
  };

  const renderCourses = ({item}) => <Courses item={item} />;

  return (
    <ScreenContainer>
      <TopHeader title="Top Courses" onBackPress={navigation.goBack} />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by title"
          onChangeText={setSearchQuery}
        />
        <Search />
      </View>
      <FlatList
        data={filterCourses()}
        renderItem={renderCourses}
        keyExtractor={item => item.course_id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>No courses found</Text>}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    backgroundColor: colors.sectionBackground,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: 16,
    marginBottom: 6,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'SemiBold-600',
    fontSize: 15,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginRight: 6,
  },
});

export default TopCoursesScreen;
