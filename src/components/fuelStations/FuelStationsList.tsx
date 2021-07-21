import React from "react";
import _ from "lodash";
import {View, Text, FlatList} from 'react-native';

import EmptyData from "@components/emptyData";
import CommonButton from "@components/commonButton";
import CommonFuelType from "@components/commonFuelType";

import Styles from './FuelStations.styles';

const FuelStationsList = (props: FuelStationsNS.IFuelStationsListProps) => {

    const {fuelStationsData} = props;

    if(fuelStationsData.length > 0 ) {
        return (
            <FlatList
            data={fuelStationsData}
            renderItem={({item}) => {
                return(
                    <View style={Styles.cardDisplay}>
                        <Text style={Styles.mainHeading}>{item.name}</Text>
                        <View style={Styles.contentView}>
                            <View style={Styles.leftContent}>
                                <Text style={Styles.text}>{`${item.address}`}</Text>
                                <Text style={Styles.text}>{`${item.distance} km`}</Text>
                                <Text style={Styles.text}>{`waiting time: ${item.estimatedTime}`}</Text>
                            </View>
                            <View style={Styles.rightContent}>
                                <View style={Styles.flexRow}>
                                {_.map(item.fuelDetails, (eachFuelDetail, key) => {
                                    if(eachFuelDetail.quantity !== '0'){
                                        return <CommonFuelType
                                            fuelType={eachFuelDetail.fuel}
                                            key={key}
                                        />
                                    }
                                })}
                                </View>
                                <CommonButton
                                    disabled={false}
                                    onClick={() => props.navigationFunction(item._id)}
                                    name={'Buy'}
                                    buttonStyle={Styles.button}
                                />
                            </View>
                        </View>
                    </View>
                )
            }}
            keyExtractor={(item) => item._id}
        />
        );
    }else {
        return (
            <EmptyData message={'No nearby fuel stations found....'}/>
       );
    }
};

export default FuelStationsList;