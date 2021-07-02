import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreenStack from './HomeScreenStack';
import FuelStationsComponent from '@components/fuelStations';
import ProfileComponent from '@components/profile';
import CommonImageDisplay from '@components/CommonImageDisplay';

import {Colors, Typography, Mixins} from '@styles/index';

const BottomTabs = () => {
    const {Navigator, Screen} = createBottomTabNavigator();
    return (
        <Navigator
            tabBarOptions = {{
                tabStyle : {
                    backgroundColor: Colors.NEAR_WHITE,
                    ...Mixins.boxShadow(Colors.NEAR_BLACK),
                },
                activeTintColor: Colors.PRIMARY,
                inactiveTintColor: Colors.INACTIVE,
            }}
            screenOptions = {({
                route
            }: NavigationNS.ITabBarScreeOptionsFunctionProps) => ({
                tabBarIcon: ({
                    focused,
                    size,
                    color,
                }:NavigationNS.ITabBarIconFunctionProps) => {
                    if(route.name === 'Home'){
                        return focused ? (
                            <CommonImageDisplay
                                imagePath = {require('@assets/images/HomeActive.png')}
                            />
                        ):(
                            <CommonImageDisplay
                                imagePath = {require('@assets/images/HomeInactive.png')}
                            />
                        ) 
                    }else if(route.name === 'GasStations'){
                        return focused ? (
                            <CommonImageDisplay
                                imagePath = {require('@assets/images/GasStationActive.png')}
                            />
                        ):(
                            <CommonImageDisplay
                                imagePath = {require('@assets/images/GasStationInactive.png')}
                            />
                        )
                    }else if(route.name === 'Profile'){
                        return focused ? (
                            <CommonImageDisplay
                                imagePath = {require('@assets/images/UserActive.png')}
                            />
                        ):(
                            <CommonImageDisplay
                                imagePath = {require('@assets/images/UserInactive.png')}
                            />
                        )
                    }
                }
            })}
        >
            <Screen 
                name="Home" 
                component={HomeScreenStack}
            />
            <Screen 
                name="GasStations" 
                component={FuelStationsComponent} 
                options={{
                    title: 'Gas Stations'
                }}    
            />
            <Screen 
                name="Profile" 
                component={ProfileComponent}     
            />
        </Navigator>
    );
};

export default BottomTabs;