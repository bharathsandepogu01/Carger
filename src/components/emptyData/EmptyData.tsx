import React from "react";
import {View, Text, Image} from 'react-native';

import Styles from './EmptyData.styles';

const EmptyData = (props: CommonComponentsNS.IEmptyProps) => {
    return (
        <View style={Styles.container}>
            <Image source={require('@assets/images/EmptyBox.png')}/>
            <Text style={Styles.text}>
                {props.message?props.message:'No Data....'}
            </Text>
        </View>
    );
};

export default EmptyData;