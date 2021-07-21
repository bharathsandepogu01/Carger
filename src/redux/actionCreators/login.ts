import actionTypes from '@redux/actionTypes/login';
import {login} from '@redux/api/apiCalls'; 
import {errorObjectHandling} from '@utils/errorObjectHandling';
import constants from '@utils/constants';
import manageToken from '@utils/manageToken';

class ActionCreators implements LoginNS.IActionCreators {
    
    setEmail: LoginNS.IActionCreators['setEmail'] = (
        email
    ) => {
        return ({
            type: actionTypes.LOGIN_SET_EMAIL,
            payload: {
                email,
            },
        });
    };

    setPassword: LoginNS.IActionCreators['setPassword'] = (
        password
    ) => {
        return({
            type: actionTypes.LOGIN_SET_PASSWORD,
            payload: {
                password,
            },
        });
    };

    setInputValidationError: LoginNS.IActionCreators['setInputValidationError'] = (
        isError
    ) => {
        return ({
            type: actionTypes.LOGIN_SET_INPUT_VALIDATION_ERROR,
            payload: {
                isError
            },
        });
    };

    setShowLoginErrorModal: LoginNS.IActionCreators['setShowLoginErrorModal'] = (
        isShowLoginErrorModal
    ) => {
        return ({
            type: actionTypes.LOGIN_SET_SHOW_ERROR_MODAL,
            payload: {
                isShowLoginErrorModal
            },
        });
    };

    onSubmitCredentials: LoginNS.IActionCreators['onSubmitCredentials'] = () => {
        return async(dispatch, getState) => {
            const appState = getState();
            if(!appState.Login.isLoading){
                dispatch({
                    type: actionTypes.LOGIN_SET_LOADER,
                    payload: {
                        isLoading: true,
                    },
                });
            };

            try{
                const getData = await login(appState.Login.email, appState.Login.password);
                await manageToken.storeData(constants.JWT_TOKEN, getData.data, dispatch);
                dispatch({
                    type: actionTypes.LOGIN_CLEAR_STATE,
                });
            }catch(error){
                const errorMessage = await errorObjectHandling(error);
                dispatch({
                    type: actionTypes.LOGIN_SET_LOGIN_ERROR,
                    payload: {
                        isLoginError: true,
                        loginErrorMessage: errorMessage,
                        isHowLoginErrorModal: true,
                    }
                });
            }
            
        };
    };

    clearState: LoginNS.IActionCreators['clearState'] = () => {
        return ({
            type: actionTypes.LOGIN_CLEAR_STATE,
        })
    };

};

export default new ActionCreators();
