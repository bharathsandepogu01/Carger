import {Reducer} from 'redux';

const initialState:LoginNS.IState = {
    email: '',
    password: '',
    inputsValidationError: false,
    loginError: false,
    isLoading: false,
    loginErrorMessage: '',
    isShowLoginErrorModal: false,
};

const reducer:Reducer<
    LoginNS.IState,
    LoginNS.AllActions
> = (state = initialState, action) => {
    switch (action.type) {
        
        case 'LOGIN_SET_EMAIL':
            return {
                ...state,
                email: action.payload.email,
                inputsValidationError: false,
            };

        case 'LOGIN_SET_INPUT_VALIDATION_ERROR':
            return {
                ...state,
                inputsValidationError: action.payload.isError,
            };
        
        case 'LOGIN_SET_LOGIN_ERROR':
            return {
                ...state,
                loginError: action.payload.isLoginError,
                isLoading: false,
                loginErrorMessage: action.payload.loginErrorMessage,
                isShowLoginErrorModal: action.payload.isHowLoginErrorModal,
            };    
        
        case 'LOGIN_SET_PASSWORD':
            return {
                ...state,
                password: action.payload.password,
                inputsValidationError: false,
            };   
            
        case 'LOGIN_SET_LOADER': 
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }; 
            
        case 'LOGIN_SET_SHOW_ERROR_MODAL':
            return {
                ...state,
                isShowLoginErrorModal: action.payload.isShowLoginErrorModal,
            }   

        case 'LOGIN_CLEAR_STATE':
            return {
                ...initialState,
            }   

        default:
            return state;
    }
};

export default reducer;
