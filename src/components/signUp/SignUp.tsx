import React from "react";
import {View, Text} from 'react-native';
import Styles from './SignUp.styles';

const SignUp = ({
    route,
    navigation
}:NavigationNS.SignUpScreenProps) => {
    return (
        <View>
            <Text style={Styles.text}>
                {'SignUp Screen'}
            </Text>
        </View>
    );
};

export default SignUp;