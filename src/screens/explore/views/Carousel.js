import React, {useCallback, memo, useRef, useState} from 'react';
import {useEffect} from 'react';
import {FlatList, View, StyleSheet, Image} from 'react-native';
import {getBanner} from '../../../api/visitors';

const AppCarousel = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(null);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);
    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;
    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const renderItem = useCallback(
    ({item}) => <Slide imageUri={item.img_path} />,
    [],
  );

  useEffect(() => {
    getBanner().then(result => {
      if (result.data.response == 100) setImages(result.data.data);
    });
  }, []);

  if (images == null)
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer} />
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        keyExtractor={(_, index) => index.toString()}
        initialNumToRender={0}
        maxToRenderPerBatch={1}
        removeClippedSubviews
        scrollEventThrottle={16}
        windowSize={2}
      />
      <View style={styles.backgroundBox} />
      <Pagination
        index={index}
        iterable={new Array(images.length).fill(0)}></Pagination>
    </View>
  );
};

const Slide = memo(({imageUri}) => (
  <Image
    resizeMode="stretch"
    source={{uri: imageUri}}
    style={styles.slideImage}
  />
));

const Pagination = ({index, iterable}) => (
  <View style={styles.pagination} pointerEvents="none">
    {iterable.map((_, i) => (
      <View
        key={i}
        style={[
          styles.paginationDot,
          index === i
            ? styles.paginationDotActive
            : styles.paginationDotInactive,
        ]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  slideImage: {
    width: 328,
    height: 194,
    borderRadius: 4,
  },
  slideTitle: {fontSize: 24},
  slideSubtitle: {fontSize: 18},
  backgroundBox: {
    position: 'absolute',
    backgroundColor: '#D8D8D8',
    width: 340,
    borderRadius: 12,
    height: 174,
    top: 10,
    zIndex: -1,
  },
  pagination: {
    position: 'relative',
    bottom: 30,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: '#3E5075'},
  paginationDotInactive: {backgroundColor: 'rgba(62,80,117,0.2)'},

  carousel: {flex: 1, width: 328},
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  emptyContainer: {
    backgroundColor: '#D8D8D8',
    width: 336,
    height: 174,
    borderRadius: 4,
  },
});

export default memo(AppCarousel);
