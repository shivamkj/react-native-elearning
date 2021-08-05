import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, View, Pressable} from 'react-native';
import {CustomText as Text, ScreenContainer, TopHeader} from '../components';
import {OptionsPicker} from '../components';
import {defaultStyles} from '../config';
import {ArrowDown, Filter} from '../assets/icons';

const sortOptions = ["What's new", 'Last Week', 'Last Month'];
const filterOptions = ['All content', 'Videos', 'Test', 'PDF'];

const NewsScreen = () => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [sortedBy, setSortedBy] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);

  return (
    <ScreenContainer>
      <TopHeader title="News" />
      <View style={styles.topContainer}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.light}
          onPress={() => setPickerVisible('sorting')}>
          <View style={styles.shortContainer}>
            <Text style={styles.shortBy}>Sort By</Text>
            <ArrowDown />
          </View>
        </TouchableHighlight>
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', height: '75%'}}>
        <Text style={{fontFamily: 'Bold-700', opacity: 0.6, fontSize: 23}}>
          No News
        </Text>
        <Text style={{opacity: 0.6, maxWidth: '75%', textAlign: 'center'}}>
          Currently No news available. News will be updated soon.
        </Text>
      </View>

      <Pressable
        style={defaultStyles.floatingBtn}
        onPress={() => setPickerVisible('filter')}>
        <Filter />
      </Pressable>

      <OptionsPicker
        visible={pickerVisible == 'filter'}
        setVisible={setPickerVisible}
        options={filterOptions}
        setSlectedOption={setCurrentFilter}
        style={{bottom: 140, right: 0, width: 160}}
      />
      <OptionsPicker
        visible={pickerVisible == 'sorting'}
        setVisible={setPickerVisible}
        options={sortOptions}
        setSlectedOption={setSortedBy}
        style={{top: 135, right: 0, width: 160}}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  shortContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortBy: {
    paddingRight: 6,
  },
  date: {
    opacity: 0.5,
    marginBottom: 16,
    marginTop: 20,
  },
});

//  <SectionList
// sections={sampleData}
// renderSectionHeader={({section}) => (
//   <Text style={styles.date}>{section.title}</Text>
// )}
// renderItem={renderItem}
// keyExtractor={(_, index) => index.toString()}
// style={{marginHorizontal: 12}}
// showsVerticalScrollIndicator={false}
//   />

// const renderItem = ({item}) => (
//   <View style={styles.itemContainer}>
//     <View style={styles.icon}>
//       <Image source={{uri: "abc.png"}} />
//     </View>
//     <View style={styles.details}>
//       <Text style={styles.title} numberOfLines={2}>
//         {item}
//       </Text>
//     </View>
//   </View>
// );
// const sampleData = [
//   {
//     title: 'Saturday September 3, 2019',
//     data: [
//       'RBI Grade B Officer Phase I Test 2018',
//       'Sustainable Devlopment & Environment',
//       'RBI Grade B Officer Phase I Test 2018',
//       'Sustainable Devlopment & Environment',
//     ],
//   },
// ];

// itemContainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-around',
// },
// icon: {
//   paddingHorizontal: 25,
//   paddingVertical: 10,
//   backgroundColor: '#F5F5F5',
//   borderWidth: 1,
//   borderColor: '#D8D8D8',
//   borderRadius: 4,
//   marginRight: 16,
//   marginBottom: 16,
// },
// details: {
//   flex: 1,
// },

export default NewsScreen;
