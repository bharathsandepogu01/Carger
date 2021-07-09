import React from "react";
import {View, Text} from 'react-native';

import Styles from './WalletTransactions.styles';

const WalletTransactions = () => {
    return (
        <View>
            <Text style={Styles.text}>
                {'Wallet Transactions Screen'}
            </Text>
        </View>
    );
};

export default WalletTransactions;