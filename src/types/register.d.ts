declare namespace RegisterNS {

    interface IState {
        email: string;
        password: string;
        mobileNumber: string;
        name: string;
        inputsValidationError: boolean;
        isLoading: boolean;
        isRegisterError: boolean;
        registerErrorMessage: string;
        isShowRegisterErrorModal: boolean;
    }

    interface IActionTypes {
        REGISTER_SET_EMAIL: 'REGISTER_SET_EMAIL';
        REGISTER_SET_PASSWORD: 'REGISTER_SET_PASSWORD';
        REGISTER_SET_NAME:'REGISTER_SET_NAME';
        REGISTER_SET_MOBILE_NUMBER: 'REGISTER_SET_MOBILE_NUMBER';
        REGISTER_SET_INPUT_VALIDATION_ERROR: 'REGISTER_SET_INPUT_VALIDATION_ERROR';
        REGISTER_SET_REGISTER_ERROR: 'REGISTER_SET_REGISTER_ERROR';
        REGISTER_ON_SUBMIT_CREDENTIALS: 'REGISTER_ON_SUBMIT_CREDENTIALS';
        REGISTER_CLEAR_STATE: 'REGISTER_CLEAR_STATE';
        REGISTER_SET_LOADER: 'REGISTER_SET_LOADER';
        REGISTER_SET_SHOW_ERROR_MODAL: 'REGISTER_SET_SHOW_ERROR_MODAL';
    }

    interface IATNSetEmail {
        type: IActionTypes['REGISTER_SET_EMAIL'];
        payload: {
            email: IState['email']; 
        };
    }

    interface IATNSetPassword {
        type: IActionTypes['REGISTER_SET_PASSWORD'];
        payload: {
            password: IState['password']; 
        };
    }

    interface IATNSetName {
        type: IActionTypes['REGISTER_SET_NAME'];
        payload: {
            name: IState['name'];
        }
    }

    interface IATNSetMobileNumber {
        type: IActionTypes['REGISTER_SET_MOBILE_NUMBER'];
        payload: {
            mobileNumber: IState['mobileNumber'];
        }
    }

    interface IATNSetInputValidationError {
        type: IActionTypes['REGISTER_SET_INPUT_VALIDATION_ERROR'];
        payload: {
            isError: boolean;
        }
    }

    interface IATNSetRegisterError {
        type: IActionTypes['REGISTER_SET_REGISTER_ERROR'];
        payload: {
            isRegisterError: boolean;
            RegisterErrorMessage: string;
            isShowRegisterErrorModal: boolean;
        }
    }

    interface IATNClearState {
        type: IActionTypes['REGISTER_CLEAR_STATE'];
    }

    interface IATNSetLoader {
        type: IActionTypes['REGISTER_SET_LOADER'];
        payload: {
            isLoading: boolean;
        }
    }

    interface IATNSetShowRegisterErrorModal {
        type: IActionTypes['REGISTER_SET_SHOW_ERROR_MODAL'];
        payload: {
            isShowRegisterErrorModal: boolean;
        }
    }

    type AllActions =
        | IATNSetEmail
        | IATNSetPassword
        | IATNSetName
        | IATNSetMobileNumber
        | IATNSetInputValidationError
        | IATNSetRegisterError
        | IATNClearState
        | IATNSetLoader
        | IATNSetShowRegisterErrorModal;

    interface IActionCreators {
        setEmail : (
            email: string,
        ) => IATNSetEmail;
        setPassword: (
            password: string,
        ) => IATNSetPassword;
        setName: (
            name: string,
        ) => IATNSetName;
        setMobileNumber: (
            mobileNumber: string,
        ) => IATNSetMobileNumber;
        setInputValidationError: (
            isError:boolean,
        ) => IATNSetInputValidationError;
        setShowRegisterErrorModal: (
            isShowRegisterErrorModal: boolean,
        ) => IATNSetShowRegisterErrorModal;
        clearState: () => IATNClearState;
        onSubmitCredentials: (
            navigation: NavigationNS.SignUpScreenProps['navigation'],
        ) => ReduxNS.IThunkFunction<AllActions>;
    }

    interface IRegisterPayload {
        email: string;
        hashedPassword: string;
        phone: number;
        username: string;
    }
    
}   