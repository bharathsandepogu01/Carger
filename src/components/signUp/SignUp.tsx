import React from "react";
import _ from "lodash";
import {
    View, 
    Text,
    GestureResponderEvent,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import CommonAuthLayout from "@components/commonAuthLayout";
import CommonInput from "@components/commonInput";
import CommonButton from "@components/commonButton";
import CommonPopup from "@components/commonPopup/CommonPopup";
import actionCreators from '@redux/actionCreators/register';

import Styles from './SignUp.styles';


const SignUp = ({
    route,
    navigation
}:NavigationNS.SignUpScreenProps) => {

    const state:RegisterNS.IState = useSelector((
        state:ReduxNS.IState
    ) => state.Register);
   
    const dispatch = useDispatch();
    
    const handleOnPress = (e: GestureResponderEvent) => {
        navigation.navigate('Login');
    };

    const dispatchSetEmail = (email:string) => {
        dispatch(actionCreators.setEmail(email));
    };

    const dispatchSetPassword = (password: string) => {
        dispatch(actionCreators.setPassword(password));
    };

    const dispatchSetMobileNumber = (mobileNumber:string) => {
        dispatch(actionCreators.setMobileNumber(mobileNumber));
    };

    const dispatchSetName = (name: string) => {
        dispatch(actionCreators.setName(name));
    };

    const dispatchShowRegisterErrorModal = (
        isShowRegisterErrorModal: boolean,
    ) => {
        dispatch(actionCreators.setShowRegisterErrorModal(isShowRegisterErrorModal));
    };

    const dispatchInputValidationError = (isInputsValidationError: boolean) => {
        dispatch(actionCreators.setInputValidationError(isInputsValidationError));
    }

    const dispatchOnSubmitCredentials = () => {
        dispatch(actionCreators.onSubmitCredentials(navigation));
    };

    const buttonDisability = (state.inputsValidationError || _.includes([
        state.email,
        state.mobileNumber,
        state.name,
        state.password,
    ], ''));

    return (
        <CommonAuthLayout
            heading={'Create Account'}
        >   
            <CommonPopup
                popupType={'error'}
                message={state.registerErrorMessage}
                isPopupOpen={state.isShowRegisterErrorModal}
                popupModalOpen={dispatchShowRegisterErrorModal}
            />
            <CommonInput
                inputTypeToValidate = {'Normal'}
                keyboardType={'default'}
                inputValue={state.name}
                onChangeInputValue={dispatchSetName}
                placeHolder={'Name'}
                customStyle={Styles.inputBox} 
                onInputValidationError={dispatchInputValidationError}
            />
            <CommonInput
                inputTypeToValidate = {'Email'}
                keyboardType={'default'}
                inputValue={state.email}
                onChangeInputValue={dispatchSetEmail}
                placeHolder={'Email'}
                customStyle={Styles.inputBox} 
                onInputValidationError={dispatchInputValidationError}
            />
            <CommonInput
                inputTypeToValidate = {'PhoneNumber'}
                keyboardType={'number-pad'}
                inputValue={state.mobileNumber}
                onChangeInputValue={dispatchSetMobileNumber}
                placeHolder={'Mobile Number'}
                customStyle={Styles.inputBox} 
                onInputValidationError={dispatchInputValidationError}
            />
            <CommonInput
                inputTypeToValidate = {'Password'}
                keyboardType={'default'}
                inputValue={state.password}
                onChangeInputValue={dispatchSetPassword}
                placeHolder={'Password'}
                customStyle={Styles.inputBox}
                secureTextEntry={true}
                onInputValidationError={dispatchInputValidationError}
            />
            <CommonButton
                disabled={buttonDisability}
                onClick={dispatchOnSubmitCredentials}
                name={'Sign up'}
                isLoading={state.isLoading}
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