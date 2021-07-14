import {Reducer} from 'redux';

const initialState:FuelStationsNS.IState = {
    fuelStationsData: [],
    isFetchError: false,
    isLoading: true,
    errorMessage: null,
};

const reducer:Reducer<
    FuelStationsNS.IState,
    FuelStationsNS.AllActions
> = (state = initialState, action) => {
    switch (action.type) {
        case 'FUEL_STATIONS_SET_INITIAL_DATA':
            return {
                ...state,
                fuelStationsData: action.payload.fuelStationsData,
                isLoading: false,
                isFetchError: false,
                errorMessage: null,
            };
        
        case 'FUEL_STATIONS_SET_LOADER':
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };

        case 'FUEL_STATIONS_SET_FETCH_ERROR':
            return {
                ...state,
                isFetchError: action.payload.isFetchError,
                isLoading: false,
                errorMessage: action.payload.errorMessage,
            }    

        case 'FUEL_STATIONS_CLEAR_STATE':
            return {
                ...initialState,
            };    

        default:
            return state;
    }
};

export default reducer;
