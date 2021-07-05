import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from '@redux/store';
import {getData} from '@utils/manageToken';
import constants from "@utils/constants";

import {BottomTabs, AuthStack} from '@navigation/index';

const App = () => {
  
  const [token, setToken] = useState<string|null>(null);

  useEffect(()=>{
    getData(constants.JWT_TOKEN).then((value:string|null) => {
      setToken(value);
    }).catch(()=>{
      console.warn('error in token fetching');
    })
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {!token?(
          <BottomTabs/>
        ):(
          <AuthStack/>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
