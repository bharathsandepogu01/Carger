import React, {
    useEffect
} from "react";
import {
    View, 
    Text,
    GestureResponderEvent,
} from 'react-native';

import CommonAuthLayout from "@components/commonAuthLayout";
import CommonInput from "@components/commonInput";
import CommonButton from "@components/commonButton";
import {storeData} from '@utils/manageToken';
import constants from "@utils/constants";

import Styles from './Login.styles';

const Login = ({
    route,
    navigation
}:NavigationNS.LoginScreenProps) => {

    const handleOnPress = (e: GestureResponderEvent) => {
        navigation.navigate('SignUp');
    };

    return (
        <CommonAuthLayout
            heading={'Welcome Back !'}
        >
            <CommonInput
                inputTypeToValidate = {'Email'}
                keyboardType={'email-address'}
                inputValue={''}
                onChangeInputValue={(value:string) => console.log(String)}
                placeHolder={'Email'}
                customStyle={Styles.inputBox} 
            />
            <CommonInput
                inputTypeToValidate = {'Password'}
                keyboardType={'default'}
                inputValue={''}
                onChangeInputValue={(value:string) => console.log(String)}
                placeHolder={'Password'}
                customStyle={Styles.inputBox}
                secureTextEntry={true}
            />
            <CommonButton
                disabled={true}
                onClick={(value:string) => console.log('Clicked!!!')}
                name={'Log in'}
            />
            <View style={Styles.linkContainer}>
                <Text style={Styles.linkContainerText}>{"Don't have an account? "}</Text>
                <Text style={Styles.linkButton}
                    onPress={handleOnPress}
                >
                    {'Register'}
                </Text>  
            </View>
        </CommonAuthLayout>
    );
};

export default Login;