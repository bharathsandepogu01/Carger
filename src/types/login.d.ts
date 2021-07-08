declare namespace LoginNS {

    interface IState {
        email: string;
        password: string;
        inputsValidationError: boolean;
        isLoading: boolean;
        loginError: boolean;
        loginErrorMessage: string;
        isShowLoginErrorModal: boolean;
    }

    interface IActionTypes {
        LOGIN_SET_EMAIL: 'LOGIN_SET_EMAIL';
        LOGIN_SET_PASSWORD: 'LOGIN_SET_PASSWORD';
        LOGIN_SET_INPUT_VALIDATION_ERROR: 'LOGIN_SET_INPUT_VALIDATION_ERROR';
        LOGIN_SET_LOGIN_ERROR: 'LOGIN_SET_LOGIN_ERROR';
        LOGIN_ON_SUBMIT_CREDENTIALS: 'LOGIN_ON_SUBMIT_CREDENTIALS';
        LOGIN_CLEAR_STATE: 'LOGIN_CLEAR_STATE';
        LOGIN_SET_LOADER: 'LOGIN_SET_LOADER';
        LOGIN_SET_SHOW_ERROR_MODAL: 'LOGIN_SET_SHOW_ERROR_MODAL';
    }

    interface IATNSetEmail {
        type: IActionTypes['LOGIN_SET_EMAIL'];
        payload: {
            email: IState['email']; 
        };
    }

    interface IATNSetPassword {
        type: IActionTypes['LOGIN_SET_PASSWORD'];
        payload: {
            password: IState['password']; 
        };
    }

    interface IATNSetInputValidationError {
        type: IActionTypes['LOGIN_SET_INPUT_VALIDATION_ERROR'];
        payload: {
            isError: boolean;
        }
    }

    interface IATNSetLoginError {
        type: IActionTypes['LOGIN_SET_LOGIN_ERROR'];
        payload: {
            isLoginError: boolean;
            loginErrorMessage: string;
            isHowLoginErrorModal: boolean;
        }
    }

    interface IATNClearState {
        type: IActionTypes['LOGIN_CLEAR_STATE'];
    }

    interface IATNSetLoader {
        type: IActionTypes['LOGIN_SET_LOADER'];
        payload: {
            isLoading: boolean;
        }
    }

    interface IATNSetShowLoginErrorModal {
        type: IActionTypes['LOGIN_SET_SHOW_ERROR_MODAL'];
        payload: {
            isShowLoginErrorModal: boolean;
        }
    }

    type AllActions =
        | IATNSetEmail
        | IATNSetPassword
        | IATNSetInputValidationError
        | IATNSetLoginError
        | IATNClearState
        | IATNSetLoader
        | IATNSetShowLoginErrorModal
        | ManageTokenNS.IATNSetToken;

    interface IActionCreators {
        setEmail : (
            email: string,
        ) => IATNSetEmail;
        setPassword: (
            password: string,
        ) => IATNSetPassword;
        setInputValidationError: (
            isError:boolean,
        ) => IATNSetInputValidationError;
        setShowLoginErrorModal: (
            isShowLoginErrorModal: boolean,
        ) => IATNSetShowLoginErrorModal;
        clearState: () => IATNClearState;
        onSubmitCredentials: () => ReduxNS.IThunkFunction<AllActions>;
    }

}   