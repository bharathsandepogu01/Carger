import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import NavigationContainer from './src/index';
import store from '@redux/store';

const App = () => {
  return (
      <Provider store = {store}>
          <NavigationContainer/>
      </Provider>
  );
};

export default App;