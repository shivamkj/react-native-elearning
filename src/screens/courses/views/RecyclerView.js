import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {CustomText as Text} from '../../../components';
import RecyclerViewH from './RecyclerViewH';
import {colors} from '../../../config';

const SCREEN_WIDTH = Dimensions.get('window').width;
const DEFAULT = 0;
const HIDDEN = -1;
const DATA_PROVIDER = new DataProvider((r1, r2) => r1 !== r2);

const RecyclerView = ({data, navigation}) => {
  const [list, setList] = useState();

  const layoutProvider = new LayoutProvider(
    i => {
      const rowData = list.getDataForIndex(i);
      if (!rowData.course_content?.length || rowData.status == 0) return HIDDEN;
      return DEFAULT;
    },
    (type, dim) => {
      switch (type) {
        case 0:
          dim.width = SCREEN_WIDTH;
          dim.height = 165;
          break;
        case -1:
          dim.width = 0;
          dim.height = 0;
          break;
        default:
          throw Error('No type matched in layout provider');
      }
    },
  );

  useEffect(() => {
    if (!data || data.length == 0) return;
    setList(DATA_PROVIDER.cloneWithRows(data));
  }, [data]);

  const toViewMore = data =>
    navigation.navigate('ViewMore', {
      title: data.topic_title,
      data: data.course_content,
    });

  const rowRenderer = (type, data) => {
    if (type == HIDDEN) return null;
    const heading = `${data.topic_title} (${data.course_content.length})`;
    return (
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {heading}
          </Text>
          <Text style={styles.viewAll} onPress={() => toViewMore(data)}>
            VIEW ALL
          </Text>
        </View>
        <RecyclerViewH data={data.course_content} navigation={navigation} />
      </>
    );
  };

  if (!list) return null;
  return (
    <>
      {data.length == 0 ? (
        <Text style={styles.emptyNote}>
          No content found as per your selection.
        </Text>
      ) : (
        <RecyclerListView
          style={styles.container}
          rowRenderer={rowRenderer}
          dataProvider={list}
          layoutProvider={layoutProvider}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 24,
  },
  title: {
    width: '80%',
    fontFamily: 'SemiBold-600',
    fontSize: 18,
  },
  viewAll: {
    color: colors.redAccent,
    fontFamily: 'Bold-700',
    fontSize: 14,
  },
  emptyNote: {
    marginTop: 30,
    fontFamily: 'Bold-700',
    opacity: 0.8,
    textAlign: 'center',
  },
});

export default RecyclerView;
