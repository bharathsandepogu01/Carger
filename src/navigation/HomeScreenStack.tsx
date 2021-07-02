import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import HomeComponent from '@components/home';

import {Colors, Typography} from '@styles/index';

const HomeScreenStack = () => {
    const {Navigator, Screen} = createStackNavigator();
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
                      fontFamily: Typography.FONT_FAMILY_BOLD,
                      fontSize: Typography.FONT_SIZE_20,
                      letterSpacing: 4,
                    }, 
                  }}
            />
        </Navigator>
    );
};

export default HomeScreenStack;