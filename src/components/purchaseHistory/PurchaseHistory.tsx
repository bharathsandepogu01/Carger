import React from "react";
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import EmptyData from "@components/emptyData";

import Styles from './PurchaseHistory.styles';

const PurchaseHistory = () => {

    const state:ProfileNS.IState = useSelector((
        state:ReduxNS.IState
    ) => state.Profile);

    const {profileData} = state;
    const gasTransactions = profileData?profileData.gasTransactions:[];

    const getBorderColor = (status:string) => {
        switch(status) {
            case 'initiated':
                return Styles.borderLeftGrey;

            case 'processing':
                return Styles.borderLeftYellow;
            
            case 'completed':
                return Styles.borderLeftGreen;    

            case 'failed':
                return Styles.borderLeftRed;

            default: 
                return Styles.borderLeftRed;    
        }
    };

    const getDate = (date:string) => {
        const newDate = moment(date);
        return newDate.format('DD-MM-YYYY');
    };

    return (
        <View style={Styles.mainContainer}>
            {gasTransactions.length > 0 ? (
                <FlatList
                    data={gasTransactions}
                    renderItem={({item}) => {
                        return(
                            <View style={[
                                Styles.card,
                                getBorderColor(item.status)
                            ]}>
                                <View>
                                    <Text style={Styles.typeText}>{_.truncate(item.pId, {length: 20})}</Text>
                                    <Text style={Styles.dateText}>{`${getDate(item.createdAt)} | ${item.status}`}</Text>
                                </View>
                                <View style={Styles.alignCenter}>
                                    <Text style={[Styles.numberText]}>{item.cost}</Text>
                                    <Text style={Styles.dateText}>{`${item.quantity}L ${item.fuelType}`}</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item._id}
                />
            ):(
                <EmptyData message={'No purchases yet....'}/>
            )}
        </View>
    );
};

export default PurchaseHistory;