import React from "react";
import {View, Text, Image} from 'react-native';

import CommonButton from "@components/commonButton";

import Styles from './Error.styles';

const Error = (props: CommonComponentsNS.IErrorProps) => {
    return (
        <View style={Styles.container}>
            <Image source={require('@assets/images/MainError.png')}/>
            <Text style={Styles.text}>
                {props.errorMessage?props.errorMessage:'Something went wrong, please try again.'}
            </Text>
            <CommonButton
                disabled={false}
                onClick={props.onClick}
                buttonStyle={Styles.buttonStyle}
                name={'Retry'}
                isLoading={props.isLoading}
            />
        </View>
    );
};

export default Error;