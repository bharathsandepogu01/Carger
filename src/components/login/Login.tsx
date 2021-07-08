import React from "react";
import _ from 'lodash';
import {
    View, 
    Text,
    GestureResponderEvent,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import CommonAuthLayout from "@components/commonAuthLayout";
import CommonInput from "@components/commonInput";
import CommonButton from "@components/commonButton";
import actionCreators from "@redux/actionCreators/login";
import Popup from "@components/commonPopup";

import Styles from './Login.styles';

const Login = ({
    route,
    navigation
}:NavigationNS.LoginScreenProps) => {

    const dispatch = useDispatch();

    const state:LoginNS.IState = useSelector((
        state:ReduxNS.IState
    ) => state.Login);

    const handleOnPress = (e: GestureResponderEvent) => {
        navigation.navigate('SignUp');
    };

    const dispatchSetEmail = (email: string) => {
        dispatch(actionCreators.setEmail(email));
    };

    const dispatchSetPassword = (password:string) => {
        dispatch(actionCreators.setPassword(password));
    };

    const dispatchInputValidationError = (
        isError: boolean,
    ) => {
        dispatch(actionCreators.setInputValidationError(isError));
    };

    const dispatchOnSubmit = () => {
        dispatch(actionCreators.onSubmitCredentials());
    };

    const dispatchSetShowLoginErrorModal = (
        isLoginErrorModalOpen: boolean,
    ) => {
        dispatch(actionCreators.setShowLoginErrorModal(isLoginErrorModalOpen));
    }

    const buttonDisability = (state.inputsValidationError || _.includes([
        state.email,
        state.password
    ], ''));

    return (
        <CommonAuthLayout
            heading={'Welcome Back !'}
        >
            <Popup
                popupType={'error'}
                message={state.loginErrorMessage}
                isPopupOpen={state.isShowLoginErrorModal}
                popupModalOpen={dispatchSetShowLoginErrorModal}
            />
            <CommonInput
                inputTypeToValidate = {'Email'}
                keyboardType={'email-address'}
                inputValue={state.email}
                onChangeInputValue={dispatchSetEmail}
                placeHolder={'Email'}
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
                onClick={dispatchOnSubmit}
                name={'Log in'}
                isLoading={state.isLoading}
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