import React from "react";
import {Text} from 'react-native';

import Styles from './CommonFuelType.styles';

const CommonFuelType = (props:CommonComponentsNS.ICommonFuelTypeProps) => {
    switch(props.fuelType){
        case 'Petrol':
            return <Text style={[Styles.commonFuelType, props.positionClassName, Styles.petrolColor]}>{'P'}</Text>;
        case 'Diesel':
            return <Text style={[Styles.commonFuelType, props.positionClassName, Styles.dieselColor]}>{'D'}</Text>;
        case 'CNG':
            return <Text style={[Styles.commonFuelType, props.positionClassName, Styles.cngColor]}>{'G'}</Text>; 
        default:
            return <Text style={[Styles.commonFuelType, props.positionClassName, Styles.petrolColor]}>{'O'}</Text>

    }
};

export default CommonFuelType;