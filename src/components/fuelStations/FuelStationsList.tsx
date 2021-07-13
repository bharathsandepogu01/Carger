import React from "react";
import _ from "lodash";
import {View, Text, FlatList} from 'react-native';

import EmptyData from "@components/emptyData";
import CommonButton from "@components/commonButton";

import Styles from './FuelStations.styles';

const FuelStationsList = (props: FuelStationsNS.IFuelStationsListProps) => {


    const getFuelTypeStyle = (
        fuelTypeDetails: ApiResponseNS.IGasStationsFuelDetails,
        key: React.Key,
    ) => {
        switch(fuelTypeDetails.fuel){
            case 'Petrol':
                return <Text key={key} style={[Styles.commonFuelType, Styles.petrolColor]}>{'P'}</Text>;
            case 'Diesel':
                return <Text key={key} style={[Styles.commonFuelType, Styles.dieselColor]}>{'D'}</Text>;;
            case 'CNG':
                return <Text key={key} style={[Styles.commonFuelType, Styles.cngColor]}>{'G'}</Text>;        
        }
    }

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
                                <Text style={Styles.text}>{item.address}</Text>
                                <Text style={Styles.text}>{`${item.distance} km`}</Text>
                                <Text style={Styles.text}>{`waiting time: ${item.estimatedTime}`}</Text>
                            </View>
                            <View style={Styles.rightContent}>
                                <View style={Styles.flexRow}>
                                {_.map(item.fuelDetails, (eachFuelDetail, key) => {
                                    return getFuelTypeStyle(eachFuelDetail, key);
                                })}
                                </View>
                                <CommonButton
                                    disabled={false}
                                    onClick={props.navigationFunction}
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