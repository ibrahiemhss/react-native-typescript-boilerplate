import I18n from 'i18n-js';
import React, { MutableRefObject, useEffect } from 'react';
import { AppState, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigation from '../components/navigation/appNavigation';
import { Colors } from '../../shared/themes';
import { createErrorMessageSelector, createLoadingSelector } from './api/apiWatchMan';
import StorageService from '../../shared/services/storageService';
import { navigationRef, isMountedRef } from '../../shared/services/navigationService';
import { store } from './reduxStore';
import { requestLoginError, requestLoginSuccess } from './actions/loginActions';
import Spinner from '../screens/staticScreens/loadingSpinner';
import * as StringConstants from '../../shared/constants/stringConstants.json';
import GlobalLtrStyle from '../../shared/styles/global.ltr.style';

const ReduxAppWrapper = (): JSX.Element => {
  const loadingSelector = createLoadingSelector([]);
  const errorSelector = createErrorMessageSelector([]);
  const { isLoggedIn } = useSelector((state) => state.authState);
  const isLoading = useSelector((state) => loadingSelector(state));
  const error = useSelector((state) => errorSelector(state));
  useEffect(() => {
    (async () => {
      I18n.locale = await StorageService.getData(StringConstants.APP_LANGUAGE, 'en');
    })();
    return () => {
      try {
        // @ts-ignore
        AppState.removeAllListeners();
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
  }, []);
  useEffect(() => {
    (isMountedRef as MutableRefObject<boolean>).current = true;
  }, []);
  useEffect(() => {
    if (isLoggedIn === undefined) {
      (async () => {
        try {
          const userToken = await StorageService.getData(StringConstants.USER_TOKEN, null);
          if (userToken) {
            store.dispatch(requestLoginSuccess({}));
            // store.dispatch(
            //   patchUserProfileRequest({
            //     newUserInfo: {deviceRegistrationId: deviceRegId},
            //   }),
            // );
          } else {
            store.dispatch(requestLoginError({}));
          }
        } catch (e) {
          store.dispatch(requestLoginError({}));
        }
      })();
    }
  });
  return (
    <View style={GlobalLtrStyle.FlexView}>
      <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
      <NavigationContainer ref={navigationRef}>
        <MainAppNavigation isLoggedIn={isLoggedIn} />
      </NavigationContainer>
      <Spinner
        visible={isLoading}
        textContent="Loading..."
        textStyle={{
          color: '#fff',
        }}
      />
    </View>
  );
};

export default ReduxAppWrapper;
