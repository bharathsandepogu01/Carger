import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
import WalletTransactions from '@components/walletTransactions';

const AppStack = () => {
    const {Navigator, Screen} = createStackNavigator();
    return (
        <Navigator
            initialRouteName={"Home"}
        >
            <Screen
                name="Home"
                component={BottomTabs}
                options={{
                    headerShown: false,
                }}
            />
            <Screen 
                name="WalletTransactions" 
                component={WalletTransactions}
                options={{
                    title: 'Wallet Transactions'
                }}
            />
        </Navigator>
    );
};

export default AppStack;