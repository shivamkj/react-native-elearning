import React from 'react';
import {FlatList} from 'react-native';
import {CustomText as Text, ScreenContainer, TopHeader} from '../../components';

import FreeResources from './views/FreeResourcesH';

const exams = ['Banking & Insurance', 'SSC', 'UPSC', 'MPSC', 'NET/SET', 'LAW'];

const FreeResourcesScreen = ({route: {params}, navigation}) => {
  const renderResources = ({item}) => (
    <FreeResources navigation={navigation} item={item} />
  );

  return (
    <ScreenContainer>
      <TopHeader title="Free Resources" onBackPress={navigation.goBack} />
      <FlatList
        data={params.resources}
        renderItem={renderResources}
        keyExtractor={item => item.exam_id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>No free Resources Found</Text>}
      />
    </ScreenContainer>
  );
};

export default FreeResourcesScreen;
