import {Reducer} from 'redux';

const initialState:ProfileNS.IState = {
    profileData: null,
    isFetchError: false,
    isLoading: false,
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

        case 'PROFILE_CLEAR_STATE':
            return {
                ...initialState,
            }    

        default:
            return state;
    }
};

export default reducer;
