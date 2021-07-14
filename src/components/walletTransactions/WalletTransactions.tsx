import React from "react";
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import EmptyData from "@components/emptyData";

import Styles from './WalletTransactions.styles';

const WalletTransactions = () => {

    const state:ProfileNS.IState = useSelector((
        state:ReduxNS.IState
    ) => state.Profile);

    const {profileData} = state;
    const transactions = profileData!==null?_.reverse(profileData.eWalletTransactions):[];

    const getBorderColor = (type:string) => {
        switch(type) {
            case 'credit':
                return Styles.borderLeftGreen;

            case 'debit':
                return Styles.borderLeftRed;
            
            default: 
                return Styles.borderLeftRed;    
        }
    };

    const getDate = (date:string) => {
        const newDate = moment(date);
        return newDate.format('DD-MM-YYYY');
    };

    const getTransactionTypeStyle = (amount: string, type: string) => {
        if(type === 'credit'){
            return <Text style={[Styles.numberText, {color: Styles.borderLeftGreen.borderLeftColor}]}>
                        {`+ ${amount}`}
                    </Text>
        }else {
            return <Text style={[Styles.numberText, {color: Styles.borderLeftRed.borderLeftColor}]}>{`- ${amount}`}</Text>
        }
    };

    return (
        <View style={Styles.mainContainer}>
            {transactions.length > 0 ? (
                <FlatList
                    data={transactions}
                    renderItem={({item}) => {
                        return(
                            <View style={[
                                Styles.card,
                                getBorderColor(item.type)
                            ]}>
                                <View>
                                    <Text style={Styles.typeText}>{_.startCase(item.type)}</Text>
                                    <Text style={Styles.dateText}>{getDate(item.createdAt)}</Text>
                                </View>
                                <View style={Styles.alignCenter}>
                                    {getTransactionTypeStyle(item.amount, item.type)}
                                    <Text style={Styles.dateText}>{_.startCase(item.status)}</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item._id}
                />
            ):(
                <EmptyData message={'No transactions yet....'}/>
            )}
            
        </View>
    );
};

export default WalletTransactions;