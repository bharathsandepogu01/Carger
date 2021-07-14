declare namespace ProfileNS {

    interface IRouteHeader {
        imagePath: import('react-native').ImageSourcePropType;
        routeHeaderName: string;
        showArrow: boolean;
        onPress: (...args:any) => void;          
    }

    interface IState {
        profileData: ApiResponseNS.IProfileDataApiResponse | null;
        isLoading: boolean;
        isFetchError: boolean;
        isInputValidationError: boolean;
        addMoneyInputValue: string;
        addMoneyURL: string | null;
        addMoneyError: boolean;
        isAddMoneyLoader: boolean;
    }

    interface IActionTypes {
        PROFILE_SET_INITIAL_DATA: 'PROFILE_SET_INITIAL_DATA';
        PROFILE_SET_LOADER: 'PROFILE_SET_LOADER';
        PROFILE_SET_ADD_MONEY_LOADER: 'PROFILE_SET_ADD_MONEY_LOADER';
        PROFILE_SET_FETCH_ERROR: 'PROFILE_SET_FETCH_ERROR';
        PROFILE_SET_INPUT_VALIDATION_ERROR: 'PROFILE_SET_INPUT_VALIDATION_ERROR';
        PROFILE_SET_ADD_MONEY_ERROR: 'PROFILE_SET_ADD_MONEY_ERROR';
        PROFILE_SET_ADD_MONEY_INPUT: 'PROFILE_SET_ADD_MONEY_INPUT';
        PROFILE_SET_ADD_MONEY_URL: 'PROFILE_SET_ADD_MONEY_URL';
        PROFILE_CLEAR_STATE: 'PROFILE_CLEAR_STATE';
        PROFILE_ON_CLICK_LOGOUT: 'PROFILE_ON_CLICK_LOGOUT';
        
    }

    interface IATNSetInitialData {
        type: IActionTypes['PROFILE_SET_INITIAL_DATA'];
        payload: {
            profileData: ApiResponseNS.IProfileDataApiResponse | null;
        }
    }

    interface IATNSetLoader {
        type: IActionTypes['PROFILE_SET_LOADER'];
        payload: {
            isLoading: boolean;
        }
    }

    interface IATNSetAddMoneyLoader {
        type: IActionTypes['PROFILE_SET_ADD_MONEY_LOADER'];
        payload: {
            isLoading: boolean;
        }
    }

    interface IATNSetFetchError {
        type: IActionTypes['PROFILE_SET_FETCH_ERROR'];
        payload: {
            isFetchError: boolean;
        }
    }

    interface IATNSetInputValidationError {
        type: IActionTypes['PROFILE_SET_INPUT_VALIDATION_ERROR'];
        payload: {
            isInputValidationError: boolean;
        }
    }

    interface IATNSetAddMoneyInput {
        type: IActionTypes['PROFILE_SET_ADD_MONEY_INPUT'];
        payload: {
            inputValue: string;
        }
    }

    interface IATNSetAddMoneyURL {
        type: IActionTypes['PROFILE_SET_ADD_MONEY_URL'];
        payload: {
            addMoneyURL: string | null;
        }
    }

    interface IATNSetAddMoneyError {
        type: IActionTypes['PROFILE_SET_ADD_MONEY_ERROR'];
        payload: {
            addMoneyError: boolean;
        }
    }

    interface IATNClearState {
        type: IActionTypes['PROFILE_CLEAR_STATE'];
    }

    type AllActions =
        | IATNSetInitialData
        | IATNSetLoader
        | IATNSetFetchError
        | ManageTokenNS.AllActions
        | IATNSetInputValidationError
        | IATNSetAddMoneyInput
        | IATNSetAddMoneyURL
        | IATNSetAddMoneyError
        | IATNSetAddMoneyLoader
        | IATNClearState;

    interface IActionCreators {
        setInitialData: () => ReduxNS.IThunkFunction<AllActions>;
        logout: () => ReduxNS.IThunkFunction<AllActions>;
        setInputValidationError: () => IATNSetInputValidationError;
        setAddMoneyInput: (
            inputValue: string,
        ) => IATNSetAddMoneyInput;
        addMoney: () => ReduxNS.IThunkFunction<AllActions>;
        setAddMoneyError: (
            isAddMoneyError: boolean,
        ) => IATNSetAddMoneyError;
        setAddMoneyURL: (
            addMoneyUrl: string | null,
        ) => IATNSetAddMoneyURL;
        clearState: () => IATNClearState;
    }

    interface ITransactionsListProps {
        gasTransactions: ApiResponseNS.IGasTransactions[];
    }

}