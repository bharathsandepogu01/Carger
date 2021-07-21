import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
import WalletTransactions from '@components/walletTransactions';
import PurchaseHistory from '@components/purchaseHistory';
import Feedback from '@components/feedback';
import PurchaseFuel from '@components/purchaseFuel';
import { Colors, Mixins, Typography } from '@styles/index';

const AppStack = () => {
    const {Navigator, Screen} = createStackNavigator();
    return (
        <Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.NEAR_WHITE,
                    ...Mixins.boxShadow(Colors.NEAR_BLACK),
                },
                headerTitleStyle: {
                    fontFamily: Typography.FONT_FAMILY_BOLD,
                    fontSize: Typography.FONT_SIZE_22,
                    color: Colors.NEAR_BLACK,
                },
            }}
        >
            <Screen
                name="HomeTabs"
                component={BottomTabs}
                options={{
                    headerShown: false,
                }}
            />
            <Screen 
                name="WalletTransactions" 
                component={WalletTransactions}
                options={{
                    title: 'Wallet Transactions',
                }}               
            />
            <Screen 
                name="PurchaseHistory" 
                component={PurchaseHistory}
                options={{
                    title: 'Purchase History',
                }}
            />
            <Screen 
                name="Feedback" 
                component={Feedback}
                options={{
                    title: 'Feedback',
                }}
            />
            <Screen 
                name="PurchaseFuel" 
                component={PurchaseFuel}
                options={{
                    title: 'Buy Fuel',
                }}
            />
        </Navigator>
    );
};

export default AppStack;