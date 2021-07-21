import {Reducer} from 'redux';

const initialState:RegisterNS.IState = {
    email: '',
    password: '',
    inputsValidationError: false,
    isLoading: false,
    isRegisterError: false,
    registerErrorMessage: '',
    isShowRegisterErrorModal: false,
    name: '',
    mobileNumber: ''
};

const reducer:Reducer<
    RegisterNS.IState,
    RegisterNS.AllActions
> = (state = initialState, action) => {
    switch (action.type) {
        
        case 'REGISTER_SET_EMAIL':
            return {
                ...state,
                email: action.payload.email,
                inputsValidationError: false,
            };

        case 'REGISTER_SET_INPUT_VALIDATION_ERROR':
            return {
                ...state,
                inputsValidationError: action.payload.isError,
            };
        
        case 'REGISTER_SET_REGISTER_ERROR':
            return {
                ...state,
                isRegisterError: action.payload.isRegisterError,
                isLoading: false,
                registerErrorMessage: action.payload.RegisterErrorMessage,
                isShowRegisterErrorModal: action.payload.isShowRegisterErrorModal,
            };    
        
        case 'REGISTER_SET_PASSWORD':
            return {
                ...state,
                password: action.payload.password,
                inputsValidationError: false,
            }; 
        
        case 'REGISTER_SET_NAME':
            return {
                ...state,
                name: action.payload.name,
                inputsValidationError: false,
            }; 
        
        case 'REGISTER_SET_MOBILE_NUMBER':
            return {
                ...state,
                mobileNumber: action.payload.mobileNumber,
                inputsValidationError: false,
            };     
            
        case 'REGISTER_SET_LOADER': 
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }; 
            
        case 'REGISTER_SET_SHOW_ERROR_MODAL':
            return {
                ...state,
               isShowRegisterErrorModal: action.payload.isShowRegisterErrorModal,
            }   

        case 'REGISTER_CLEAR_STATE':
            return {
                ...initialState,
            }   

        default:
            return state;
    }
};

export default reducer;
