import React from "react";
import {
    View, 
    Text,
    GestureResponderEvent,
} from 'react-native';

import CommonAuthLayout from "@components/commonAuthLayout";
import CommonInput from "@components/commonInput";
import CommonButton from "@components/commonButton";

import Styles from './SignUp.styles';


const SignUp = ({
    route,
    navigation
}:NavigationNS.SignUpScreenProps) => {
    
    const handleOnPress = (e: GestureResponderEvent) => {
        navigation.navigate('Login');
    };

    return (
        <CommonAuthLayout
            heading={'Create Account'}
        >   
            <CommonInput
                inputTypeToValidate = {'Name'}
                keyboardType={'default'}
                inputValue={''}
                onChangeInputValue={(value:string) => console.log(String)}
                placeHolder={'Name'}
                customStyle={Styles.inputBox} 
            />
            <CommonInput
                inputTypeToValidate = {'Email'}
                keyboardType={'email-address'}
                inputValue={''}
                onChangeInputValue={(value:string) => console.log(String)}
                placeHolder={'Email'}
                customStyle={Styles.inputBox} 
            />
            <CommonInput
                inputTypeToValidate = {'PhoneNumber'}
                keyboardType={'number-pad'}
                inputValue={''}
                onChangeInputValue={(value:string) => console.log(String)}
                placeHolder={'Mobile Number'}
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
                name={'Sign up'}
            />
            <View style={Styles.linkContainer}>
                <Text style={Styles.linkContainerText}>{'Already have an account? '}</Text>
                <Text style={Styles.linkButton}
                    onPress={handleOnPress}
                >
                    {'Login'}
                </Text>  
            </View>
        </CommonAuthLayout>
    );    
};

export default SignUp;