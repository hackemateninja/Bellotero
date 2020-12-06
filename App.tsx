import 'react-native-gesture-handler';
import React from 'react';
import store from './src/state/state';
// @ts-ignore
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {ScreenContainer} from './src/components';
import {StackNavigator} from './src/navigation';
import {COLORS} from './src/constants';
import {useLoadFonts} from './src/hooks';

enableScreens();

export default function App() {

  const isLoaded = useLoadFonts()

  if (isLoaded) {
    return (
      <Provider store={store}>
        <ScreenContainer color={COLORS.white}>
          <StackNavigator/>
        </ScreenContainer>
      </Provider>
    );
  }else {
    return null;
  }
}

