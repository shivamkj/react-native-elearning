import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {PdfCard, VideoCard, TestCard, LiveVideo} from './ContentCard';

const DATA_PROVIDER = new DataProvider((r1, r2) => r1 !== r2);

const RecyclerViewH = ({data, navigation}) => {
  const [list, setList] = useState();

  useEffect(() => {
    setList(DATA_PROVIDER.cloneWithRows(data));
  }, [data]);

  const layoutProvider = new LayoutProvider(
    (i) => parseInt(list.getDataForIndex(i).type),
    (type, dim) => {
      switch (type) {
        case 0:
        case 1:
        case 2:
        case 4:
          dim.width = 106;
          dim.height = 100;
          break;
        default:
          throw Error('No type matched in layout provider');
      }
    },
  );

  const rowRenderer = (type, data) => {
    switch (type) {
      case 0:
        return <PdfCard data={data} navigation={navigation} />;
      case 1:
        return <VideoCard data={data} navigation={navigation} />;
      case 2:
        return <TestCard data={data} navigation={navigation} />;
      case 4:
        return <LiveVideo data={data} navigation={navigation} />;
      default:
        throw Error('No type matched in layout renderer');
    }
  };

  return (
    <RecyclerListView
      style={{flex: 1}}
      rowRenderer={rowRenderer}
      dataProvider={list}
      layoutProvider={layoutProvider}
      isHorizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default RecyclerViewH;
