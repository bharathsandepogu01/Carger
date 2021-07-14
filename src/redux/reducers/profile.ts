import {Reducer} from 'redux';

const initialState:ProfileNS.IState = {
    profileData: null,
    isFetchError: false,
    isLoading: true,
    isInputValidationError: false,
    addMoneyInputValue: '', 
    addMoneyURL: null,
    addMoneyError: false,
};

const reducer:Reducer<
    ProfileNS.IState,
    ProfileNS.AllActions
> = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILE_SET_INITIAL_DATA':
            return {
                ...state,
                profileData: action.payload.profileData,
                isLoading: false,
                isFetchError: false,
            };
        
        case 'PROFILE_SET_LOADER':
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };    

        case 'PROFILE_SET_FETCH_ERROR':
            return {
                ...state,
                isFetchError: action.payload.isFetchError,
                isLoading: false,
            }; 
            
        case 'PROFILE_SET_INPUT_VALIDATION_ERROR':
            return {
                ...state,
                isInputValidationError: action.payload.isInputValidationError,
            };

        case 'PROFILE_SET_ADD_MONEY_INPUT':
            return {
                ...state,
                isInputValidationError: false,
                addMoneyInputValue: action.payload.inputValue,
            }    

        case 'PROFILE_SET_ADD_MONEY_ERROR':
            return {
                ...state,
                addMoneyError: action.payload.addMoneyError,
            };

        case 'PROFILE_SET_ADD_MONEY_URL':
            return {
                ...state,
                addMoneyURL: action.payload.addMoneyURL,
                addMoneyInputValue: '',
            }    

        case 'PROFILE_CLEAR_STATE':
            return {
                ...initialState,
            };    

        default:
            return state;
    }
};

export default reducer;
