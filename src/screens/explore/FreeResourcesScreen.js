import React from 'react';
import {NavigationContext} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {CustomText as Text, ScreenContainer, TopHeader} from '../../components';
import FreeResources from './views/FreeResourcesH';

const FreeResourcesScreen = ({route: {params}}) => {
  const navigation = React.useContext(NavigationContext);

  const renderResources = ({item}) => <FreeResources item={item} />;

  return (
    <ScreenContainer>
      <TopHeader title="Free Resources" onBackPress={navigation.goBack} />
      <FlatList
        data={params.resources}
        renderItem={renderResources}
        keyExtractor={item => item.id + item.type}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>No free Resources Found</Text>}
      />
    </ScreenContainer>
  );
};

export default FreeResourcesScreen;
