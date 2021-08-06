import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {createAccessToken, makePaymentRequest} from '../../api/payment';
import {LoadingIndicator, ScreenContainer} from '../../components';
import {getAuthDetails} from '../../utils/authStorage';
import {showToast} from '../../utils/functions';

const REDIRECT_URL = 'https://api.instamojo.com/integrations/android/redirect';

const InstamojoPaymentScreen = ({navigation, route: {params}}) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {access_token},
        } = await createAccessToken();

        const {userId} = getAuthDetails();
        const {
          data: {longurl},
        } = await makePaymentRequest(
          access_token,
          userId,
          params.courseId,
          params.coupon,
        );

        if (longurl == undefined) throw Error();
        else setUrl(longurl);
      } catch (err) {
        showToast('Error while genrating payment request');
        navigation.goBack();
      }
    })();
  }, []);

  const onNavigationChange = webViewState => {
    const {url: currentUrl} = webViewState;
    if (currentUrl.startsWith(REDIRECT_URL)) {
      const {payment_status: paymentStatus} = getQueryParams(currentUrl);
      navigation.replace('PaymentStatus', {paymentStatus});
    }
  };

  return (
    <ScreenContainer>
      <WebView
        source={{uri: url}}
        onNavigationStateChange={onNavigationChange}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        renderLoading={() => <LoadingIndicator />}
      />
    </ScreenContainer>
  );
};

const getQueryParams = url => {
  const splitted = url.slice(url.indexOf('?') + 1).split('&');
  const params = {};
  splitted.map(e => {
    const keyValue = e.split('=');
    params[keyValue[0]] = keyValue[1];
  });
  return params;
};

export default InstamojoPaymentScreen;
