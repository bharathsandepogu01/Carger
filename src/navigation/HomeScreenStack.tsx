import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import HomeComponent from '@components/home';
import actionCreators from '@redux/actionCreators/profile';

import {Colors, Typography} from '@styles/index';
import profileStyles from '@components/profile/Profile.styles';

const HomeScreenStack = () => {
    const dispatch = useDispatch();
    const {Navigator, Screen} = createStackNavigator();

    const dispatchLogOut = () => {
      dispatch(actionCreators.logout());
    };
    
    return(
        <Navigator>
            <Screen
                name="Home"
                component={HomeComponent}
                options = {{
                    title: 'CARGER',
                    headerStyle : {
                      backgroundColor: Colors.PRIMARY,
                    },
                    headerTitleAlign: 'left',
                    headerTintColor: Colors.NEAR_WHITE,
                    headerTitleStyle : {
                      fontFamily: Typography.FONT_FAMILY_REGULAR,
                      fontSize: Typography.FONT_SIZE_24,
                      letterSpacing: 4,
                    },
                    headerRight: () => {
                      return (
                          <TouchableOpacity
                            disabled={false}
                            onPress={dispatchLogOut}
                            style={{flex:1, justifyContent: 'center', alignItems: 'center', marginRight: 10,}}
                          >
                            <Image 
                              source={require('@assets/images/LogOutWhite.png')}
                              style={profileStyles.routeImage}
                            />
                          </TouchableOpacity>
                      );
                    } 
                  }}  
            />
        </Navigator>
    );
};

export default HomeScreenStack;