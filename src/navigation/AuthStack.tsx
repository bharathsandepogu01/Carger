import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '@components/login';
import SignUP from '@components/signUp';
import SplashScreen from '@components/splashScreen';

const AuthStack = () => {
    const {Navigator, Screen} = createStackNavigator<NavigationNS.AuthStackParamsList>();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {/* <Screen
                name="SplashScreen"
                component={SplashScreen}
            /> */}
            <Screen 
                name="Login" 
                component={Login}
            />
            <Screen 
                name="SignUp" 
                component={SignUP}
            />
        </Navigator>
    );
};

export default AuthStack;