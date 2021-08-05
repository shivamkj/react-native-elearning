import React from 'react';
import {WebView} from 'react-native-webview';
import {LoadingIndicator, ScreenContainer} from '../../components';

const LiveStreamScreen = ({route: {params}}) => {
  return (
    <ScreenContainer>
      <WebView
        source={{uri: params.link}}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        renderLoading={() => <LoadingIndicator />}
      />
    </ScreenContainer>
  );
};

export default LiveStreamScreen;
