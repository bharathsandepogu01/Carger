import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from '@redux/store';

import BottomTabs from '@navigation/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
