import React from 'react';
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Text from './Text';
import defaultStyles from '../config/styles';

const OptionsPicker = ({
  visible,
  setVisible,
  options,
  setSlectedOption,
  style,
}) => {
  const onSelect = (index) => {
    setVisible(false);
    setSlectedOption(index);
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent
      style={styles.modal}>
      <TouchableOpacity
        activeOpacity={0.1}
        style={styles.backdrop}
        onPress={() => setVisible(false)}
      />
      <View style={[styles.container, defaultStyles.shadow, style]}>
        {options.map((item, index) => {
          return (
            <Text
              key={index}
              style={styles.option}
              onPress={() => onSelect(index)}>
              {item}
            </Text>
          );
        })}
        <View style={styles.bottomView} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
  },
  backdrop: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#00000050',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    margin: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
    zIndex: 3,
    width: '50%',
  },
  option: {
    fontFamily: 'SemiBold-600',
    fontSize: 17,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
  },
  bottomView: {
    marginBottom: 4,
  },
});

export default OptionsPicker;
