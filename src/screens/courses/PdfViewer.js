import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import Clipboard from '@react-native-community/clipboard';
import {
  ScreenContainer,
  CustomText as Text,
  LoadingIndicator,
  Button,
} from '../../components';
import {showToast} from '../../utils/functions';

const PdfViewerScreen = ({route: {params}, navigation}) => {
  const createNote = () => {
    Clipboard.getString().then((copiedText) => {
      if (!copiedText) showToast('No text copied');
      else
        navigation.navigate('EditNote', {
          pdfId: params.id,
          noteContent: copiedText,
        });
    });
  };

  console.log({id: params.id, link: params.link});

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <WebView
          source={{uri: `https://edua.in/pdf.html?url=${params.link}`}}
          originWhitelist={['*']}
          style={styles.pdf}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          renderLoading={() => <LoadingIndicator />}
        />
      </View>
      <View style={styles.bottomBar}>
        <Text style={styles.instruction}>
          Copy content and click on create note to add note
        </Text>
        <Button
          title="Create Note"
          style={styles.noteBtn}
          onPress={createNote}
        />
      </View>
    </ScreenContainer>
  );
};

export default PdfViewerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderColor: 'blue',
    borderWidth: 4,
  },
  bottomBar: {
    flexDirection: 'row',
    padding: 8,
  },
  instruction: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
  },
  noteBtn: {
    flex: 1,
    width: '20%',
    paddingVertical: 8,
  },
});
