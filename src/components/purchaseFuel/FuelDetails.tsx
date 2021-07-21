import React from "react";
import _ from 'lodash';
import {View, Text} from 'react-native';

import CommonFuelType from "@components/commonFuelType";

import Styles from './PurchaseFuel.styles';

const FuelDetails = (props: FuelStationsNS.IFuelDetails) => {

    return(
        <View style={Styles.cardDisplay}>
            <Text style={Styles.fuelStationName}>{props.fuelStationName}</Text>
            {_.map(props.fuelDetails, (eachFuelDetail, key) => {
                if(eachFuelDetail.quantity !== '0'){
                    return (
                        <View key={key} style={Styles.fuelDetail}>
                            <View style={Styles.viewFlexRow}>
                                <CommonFuelType fuelType={eachFuelDetail.fuel}/>
                                <Text style={Styles.fuelType}>{`${eachFuelDetail.fuel}`}</Text>    
                            </View> 
                            <Text style={Styles.fuelDetails}>{`${eachFuelDetail.quantity} Litres`}</Text>
                            <Text style={Styles.fuelDetails}>{`Rs ${_.round(eachFuelDetail.price, 2)}/Litre`}</Text>
                        </View>
                    );
                }
            })}
        </View>
    )
};

export default FuelDetails;