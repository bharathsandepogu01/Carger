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
    }

    interface IActionTypes {
        PROFILE_SET_INITIAL_DATA: 'PROFILE_SET_INITIAL_DATA';
        PROFILE_SET_LOADER: 'PROFILE_SET_LOADER';
        PROFILE_SET_FETCH_ERROR: 'PROFILE_SET_FETCH_ERROR';
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

    interface IATNSetFetchError {
        type: IActionTypes['PROFILE_SET_FETCH_ERROR'];
        payload: {
            isFetchError: boolean;
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
        | IATNClearState;

    interface IActionCreators {
        setInitialData: () => ReduxNS.IThunkFunction<AllActions>;
        logout: () => ReduxNS.IThunkFunction<AllActions>;
        clearState: () => IATNClearState;
    }

}