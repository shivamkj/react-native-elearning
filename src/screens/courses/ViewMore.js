import React, {useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {ScreenContainer, TopHeader, OptionsPicker} from '../../components';
import {defaultStyles} from '../../config';
import {
  PdfCard,
  VideoCard,
  TestCard,
  LiveVideo,
} from './views/ContentCardHorizontal';
import {Filter} from '../../assets/icons';

const filterOptions = ['All content', 'PDF', 'Videos', 'Test'];

const ViewMoreScreen = ({navigation, route: {params}}) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(0);

  const filter = (data) => {
    if (currentFilter == 0) return data;
    const type = (currentFilter - 1).toString();
    return data.filter((content) => content.type == type);
  };

  const renderItem = ({item}) => {
    switch (item.type) {
      case '0':
        return <PdfCard data={item} navigation={navigation} />;
      case '1':
        return <VideoCard data={item} navigation={navigation} />;
      case '2':
        return <TestCard data={item} navigation={navigation} />;
      case '4':
        return <LiveVideo data={item} navigation={navigation} />;
      default:
        throw Error('No type matched in render Item');
    }
  };

  return (
    <ScreenContainer>
      <TopHeader title={params.title} onBackPress={navigation.goBack} />
      <FlatList
        data={filter(params.data)}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index.toString()}
      />
      <Pressable
        style={defaultStyles.floatingBtn}
        onPress={() => setPickerVisible(true)}>
        <Filter />
      </Pressable>
      <OptionsPicker
        visible={pickerVisible}
        setVisible={setPickerVisible}
        options={filterOptions}
        setSlectedOption={setCurrentFilter}
        style={{bottom: 80, right: 0, width: 160}}
      />
    </ScreenContainer>
  );
};

export default ViewMoreScreen;
