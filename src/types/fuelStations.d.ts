declare namespace FuelStationsNS {

    interface IState {
        fuelStationsData: ApiResponseNS.IGasStationsApiData[];
        isLoading: boolean;
        isFetchError: boolean;
        errorMessage: string | null;
    }

    interface IActionTypes {
        FUEL_STATIONS_SET_INITIAL_DATA: 'FUEL_STATIONS_SET_INITIAL_DATA';
        FUEL_STATIONS_SET_LOADER: 'FUEL_STATIONS_SET_LOADER';
        FUEL_STATIONS_SET_FETCH_ERROR: 'FUEL_STATIONS_SET_FETCH_ERROR';
        FUEL_STATIONS_CLEAR_STATE: 'FUEL_STATIONS_CLEAR_STATE';
    }

    interface IATNSetInitialData {
        type: IActionTypes['FUEL_STATIONS_SET_INITIAL_DATA'];
        payload: {
            fuelStationsData: ApiResponseNS.IGasStationsApiData[];
        }
    }

    interface IATNSetLoader {
        type: IActionTypes['FUEL_STATIONS_SET_LOADER'];
        payload: {
            isLoading: boolean;
        }
    }

    interface IATNSetFetchError {
        type: IActionTypes['FUEL_STATIONS_SET_FETCH_ERROR'];
        payload: {
            isFetchError: boolean;
            errorMessage: string | null;
        }
    }

    interface IATNClearState {
        type: IActionTypes['FUEL_STATIONS_CLEAR_STATE'];
    }

    type AllActions =
        | IATNSetInitialData
        | IATNSetLoader
        | IATNSetFetchError
        | IATNClearState
        | ManageTokenNS.AllActions;

    interface IActionCreators {
        setInitialData: (
            latitude: number,
            longitude: number,
        ) => ReduxNS.IThunkFunction<AllActions>;
        setError: (
            isError: boolean,
            errorMessage: string | null,
        ) => IATNSetFetchError;
        clearState: () => IATNClearState;
    }

    interface IFuelStationsListProps {
        fuelStationsData: IState['fuelStationsData'];
        navigationFunction: (...args:any) => void; 
    }

}