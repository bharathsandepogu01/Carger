import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {AppStack, AuthStack} from '@navigation/index';
import manageToken from '@utils/manageToken';
import constants from '@utils/constants';

import {Colors} from '@styles/index';

const NavContainer = () => {

  const state:ManageTokenNS.IState = useSelector((
    state:ReduxNS.IState 
  ) => state.ManageToken);

  const dispatch = useDispatch();

  useEffect(() => {
    (async() => await manageToken.getData(constants.JWT_TOKEN, dispatch))();
  }, []);

  return (
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor={Colors.SECONDARY}
        />
        {state.token!==null?(
          <AppStack/>
        ):(
          <AuthStack/>
        )}
      </NavigationContainer>
  );
};

export default NavContainer;
