import { Dispatch } from 'react';
import _ from 'lodash';

import actionTypes from '../actionTypes/fuelStations';
import { errorObjectHandling } from '@utils/errorObjectHandling';
import manageToken from '@utils/manageToken';
import constants from '@utils/constants';
import {getFuelStationsData, purchaseFuelAPICall} from '@redux/api/apiCalls';

class actionCreators implements FuelStationsNS.IActionCreators {

    dispatchSetLoader = (
        dispatch: Dispatch<FuelStationsNS.AllActions>,
        isLoading: boolean,
    ) => {
        return(dispatch({
            type: actionTypes.FUEL_STATIONS_SET_LOADER,
            payload: {
                isLoading,
            }
        }));
    }

    dispatchSetFetchError = (
        dispatch:Dispatch<FuelStationsNS.AllActions>,
        isFetchError: boolean,
        errorMessage: string | null,
    ) => {
        return(dispatch({
            type: actionTypes.FUEL_STATIONS_SET_FETCH_ERROR,
            payload: {
                isFetchError,
                errorMessage,
            }
        }));
    }

    setInitialData: FuelStationsNS.IActionCreators['setInitialData'] = (
        latitude,
        longitude
    ) => {
        return async(dispatch, getState) => {
            const token = getState().ManageToken.token;
            if(!getState().Profile.isLoading){
                this.dispatchSetLoader(dispatch, true);
            }
            try{
                const fuelStationsData = await getFuelStationsData(token, latitude, longitude);
                const orderByDistanceData = _.orderBy(fuelStationsData.data, ['distance'], ['asc']);
                dispatch({
                    type: actionTypes.FUEL_STATIONS_SET_INITIAL_DATA,
                    payload: {
                        fuelStationsData: orderByDistanceData,
                    },
                });
            }catch(error){
                const getErrorData = await errorObjectHandling(error);
                if(getErrorData === 'invalid token'){
                    manageToken.clearToken(constants.JWT_TOKEN, dispatch);
                }else {
                    this.dispatchSetFetchError(dispatch, true, null);
                }
            }
        };
    }

    dispatchSetFuelStation = (
        dispatch: Dispatch<FuelStationsNS.AllActions>,
        selectedFuelStation: FuelStationsNS.IState['selectedFuelStation'],
    ) => {
        dispatch({
            type: actionTypes.FUEL_STATIONS_SET_SELECTED_FUEL_STATION,
            payload: {
                selectedFuelStation,
            },
        });
    }

    setSelectedFuelStation: FuelStationsNS.IActionCreators['setSelectedFuelStation'] = (
        fuelStationID,
        navigation
    ) => {
        return async(dispatch, getState) => {
            const fuelStationsData = _.cloneDeep(getState().FuelStations.fuelStationsData);
            const selectedFuelStation = _.filter(fuelStationsData, {'_id': fuelStationID});
            if(selectedFuelStation.length > 0) {
                this.dispatchSetFuelStation(dispatch, selectedFuelStation[0]);
                navigation.navigate('PurchaseFuel');
            }else {
                this.dispatchSetFuelStation(dispatch, null);
            }
        }
    }

    setError: FuelStationsNS.IActionCreators['setError'] = (
        isError,
        errorMessage
    ) => {
        return({
            type: actionTypes.FUEL_STATIONS_SET_FETCH_ERROR,
            payload: {
                isFetchError: isError,
                errorMessage: errorMessage,
            }
        });
    };

    purchaseFuel: FuelStationsNS.IActionCreators['purchaseFuel'] = (
        name,
        type,
        quantity,
        total,
        navigation,
    ) => {
        return async(dispatch, getState) => {
            const token = getState().ManageToken.token;
            if(!getState().Profile.isLoading){
                this.dispatchSetLoader(dispatch, true);
            }
            try{   
                const purchaseFuelResponse = await purchaseFuelAPICall(
                    token,
                    name,
                    type,
                    quantity,
                    total,
                );
                this.dispatchSetLoader(dispatch, false);
                navigation.navigate('Home');
            }catch(error){
                const getErrorData = await errorObjectHandling(error);
                if(getErrorData === 'invalid token'){
                    manageToken.clearToken(constants.JWT_TOKEN, dispatch);
                }else {
                    this.dispatchSetFetchError(dispatch, true, getErrorData);
                }
            }
        };
    }

    clearState: FuelStationsNS.IActionCreators['clearState'] = () => {
        return ({
            type: actionTypes.FUEL_STATIONS_CLEAR_STATE,
        });
    }

}

export default new actionCreators();
