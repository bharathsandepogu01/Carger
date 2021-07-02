import React from "react";
import {View, Text} from 'react-native';
import Styles from './Login.styles';

const Login = ({
    route,
    navigation
}:NavigationNS.LoginScreenProps) => {
    return (
        <View>
            <Text style={Styles.text}>
                {'Login Screen'}
            </Text>
        </View>
    );
};

export default Login;