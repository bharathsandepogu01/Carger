import React from "react";
import {View, Text, FlatList, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import EmptyData from "@components/emptyData";

import Styles from './Home.styles';

const TransactionsList = (props: ProfileNS.ITransactionsListProps) => {

    const gasTransactions = _.reverse(props.gasTransactions);

    const getFuelTypeStyle = (
        fuelType: string,
        key: React.Key,
    ) => {
        switch(fuelType){
            case 'Petrol':
                return <Text key={key} style={[Styles.commonFuelType, Styles.petrolColor]}>{'P'}</Text>;
            case 'Diesel':
                return <Text key={key} style={[Styles.commonFuelType, Styles.dieselColor]}>{'D'}</Text>;;
            case 'CNG':
                return <Text key={key} style={[Styles.commonFuelType, Styles.cngColor]}>{'G'}</Text>;        
        }
    }

    return (
        <View style={Styles.bottomContainer}>
            <Text style={Styles.transactionsHeading}>{'Processing Transactions'}</Text>
            {gasTransactions.length > 0 ? (
                <FlatList
                    data={gasTransactions}
                    renderItem={({item}) => {
                        return(
                            <View style={[Styles.card]}>
                                <View>
                                    <Text style={Styles.typeText}>{_.truncate(item.pId, {length: 20})}</Text>
                                    <View style={Styles.flewRow}>
                                        <Text style={Styles.dateText}>{`${item.quantity} litre ${item.fuelType}`}</Text>
                                        {getFuelTypeStyle(item.fuelType, item._id)}
                                    </View>
                                </View>
                                <View style={Styles.alignCenter}>
                                    <Text style={[Styles.numberText]}>{`${item.cost}`}</Text>
                                    <Text style={Styles.dateTextBold}>{`OTP: ${item.otp}`}</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item._id}
                />
            ):(
                <ScrollView style={Styles.emptyContainer}>
                    <EmptyData 
                        message={'No purchases yet....'}
                    /> 
                </ScrollView>
            )}
        </View>
    );
};

export default TransactionsList;