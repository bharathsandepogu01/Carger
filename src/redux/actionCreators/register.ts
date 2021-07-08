import actionTypes from '@redux/actionTypes/register';
import {register} from '@redux/api/apiCalls';
import {errorObjectHandling} from '@utils/errorObjectHandling'; 

class ActionCreators implements RegisterNS.IActionCreators {
    
    setEmail: RegisterNS.IActionCreators['setEmail'] = (
        email
    ) => {
        return ({
            type: actionTypes.REGISTER_SET_EMAIL,
            payload: {
                email,
            },
        });
    };

    setPassword: RegisterNS.IActionCreators['setPassword'] = (
        password
    ) => {
        return({
            type: actionTypes.REGISTER_SET_PASSWORD,
            payload: {
                password,
            },
        });
    };

    setName: RegisterNS.IActionCreators['setName'] = (
        name
    ) => {
        return({
            type: actionTypes.REGISTER_SET_NAME,
            payload: {
                name,
            },
        });
    };

    setMobileNumber: RegisterNS.IActionCreators['setMobileNumber'] = (
        mobileNumber
    ) => {
        return({
            type: actionTypes.REGISTER_SET_MOBILE_NUMBER,
            payload: {
                mobileNumber,
            },
        });
    };

    setInputValidationError: RegisterNS.IActionCreators['setInputValidationError'] = (
        isError
    ) => {
        return ({
            type: actionTypes.REGISTER_SET_INPUT_VALIDATION_ERROR,
            payload: {
                isError
            },
        });
    };

    setShowRegisterErrorModal: RegisterNS.IActionCreators['setShowRegisterErrorModal'] = (
        isShowRegisterErrorModal
    ) => {
        return ({
            type: actionTypes.REGISTER_SET_SHOW_ERROR_MODAL,
            payload: {
                isShowRegisterErrorModal
            },
        });
    };

    onSubmitCredentials: RegisterNS.IActionCreators['onSubmitCredentials'] = (
        navigation
    ) => {
        return async(dispatch, getState) => {
            const registerState = getState().Register;
            if(!registerState.isLoading){
                dispatch({
                    type: actionTypes.REGISTER_SET_LOADER,
                    payload: {
                        isLoading: true,
                    },
                });
            };

            try{
                const registerUser = await register(
                    registerState.name,
                    registerState.email,
                    parseInt(registerState.mobileNumber),
                    registerState.password
                );
                navigation.navigate('Login');
            }catch(error){
                const errMessage = await errorObjectHandling(error);
                dispatch({
                    type: actionTypes.REGISTER_SET_REGISTER_ERROR,
                    payload: {
                        isRegisterError: true,
                        RegisterErrorMessage: errMessage,
                        isShowRegisterErrorModal: true,
                    }
                });
            }
            
        };
    };

    clearState: RegisterNS.IActionCreators['clearState'] = () => {
        return ({
            type: actionTypes.REGISTER_CLEAR_STATE,
        })
    };

};

export default new ActionCreators();
