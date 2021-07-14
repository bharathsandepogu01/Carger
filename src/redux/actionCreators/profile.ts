import { Dispatch } from 'react';

import actionTypes from '../actionTypes/profile';
import {getProfileData, addMoneyToWallet} from '@redux/api/apiCalls';
import { errorObjectHandling } from '@utils/errorObjectHandling';
import manageToken from '@utils/manageToken';
import constants from '@utils/constants';

class actionCreators implements ProfileNS.IActionCreators {

    dispatchSetLoader = (
        dispatch: Dispatch<ProfileNS.AllActions>,
        isLoading: boolean,
    ) => {
        return(dispatch({
            type: actionTypes.PROFILE_SET_LOADER,
            payload: {
                isLoading,
            }
        }));
    }

    dispatchSetFetchError = (
        dispatch:Dispatch<ProfileNS.AllActions>,
        isFetchError: boolean,
    ) => {
        return(dispatch({
            type: actionTypes.PROFILE_SET_FETCH_ERROR,
            payload: {
                isFetchError,
            }
        }));
    }

    setInitialData: ProfileNS.IActionCreators['setInitialData'] = () => {
        return async(dispatch, getState) => {
            const token = getState().ManageToken.token;
            if(!getState().Profile.isLoading){
                this.dispatchSetLoader(dispatch, true);
            }
            try{
                const profileDataApiResponse = await getProfileData(token);
                dispatch({
                    type: actionTypes.PROFILE_SET_INITIAL_DATA,
                    payload: {
                        profileData: profileDataApiResponse.data,
                    },
                });
            }catch(error){
                const getErrorData = await errorObjectHandling(error);
                if(getErrorData === 'invalid token'){
                    manageToken.clearToken(constants.JWT_TOKEN, dispatch);
                }else {
                    this.dispatchSetFetchError(dispatch, true);
                }
            }
        };
    }

    logout: ProfileNS.IActionCreators['logout'] = () => {
        return async(dispatch, getState) => {
            try {
                await manageToken.clearToken(constants.JWT_TOKEN, dispatch);
            }catch{
                console.log('error in logout');
            }
        }
    }

    setInputValidationError: ProfileNS.IActionCreators['setInputValidationError'] = () => {
        return({
            type: actionTypes.PROFILE_SET_INPUT_VALIDATION_ERROR,
            payload: {
                isInputValidationError: true,
            }
        });
    }

    setAddMoneyInput: ProfileNS.IActionCreators['setAddMoneyInput'] = (
        inputValue
    ) => {
        return({
            type: actionTypes.PROFILE_SET_ADD_MONEY_INPUT,
            payload: {
                inputValue,
            }
        });
    }

    addMoney: ProfileNS.IActionCreators['addMoney'] = () => {
        return async(dispatch, getState) => {
            const token = getState().ManageToken.token;
            const amount = getState().Profile.addMoneyInputValue;
            if(!getState().Profile.isAddMoneyLoader){
                dispatch({
                    type: actionTypes.PROFILE_SET_ADD_MONEY_LOADER,
                    payload: {
                        isLoading: true,
                    }
                });
            };
            try{
                const getAddMoneyUrl = await addMoneyToWallet(token, amount);
                dispatch({
                    type: actionTypes.PROFILE_SET_ADD_MONEY_URL,
                    payload: {
                        addMoneyURL: getAddMoneyUrl.data.link
                    },
                })
            }catch(error){
                const getErrorData = await errorObjectHandling(error);
                if(getErrorData === 'invalid token'){
                    manageToken.clearToken(constants.JWT_TOKEN, dispatch);
                }else {
                    dispatch({
                        type: actionTypes.PROFILE_SET_ADD_MONEY_ERROR,
                        payload: {
                            addMoneyError: true,
                        }
                    });
                }
            }
        }
    }

    setAddMoneyError: ProfileNS.IActionCreators['setAddMoneyError'] = (
        addMoneyError
    ) => {
        return ({
            type: actionTypes.PROFILE_SET_ADD_MONEY_ERROR,
            payload: {
                addMoneyError,
            }
        });
    } 

    setAddMoneyURL: ProfileNS.IActionCreators['setAddMoneyURL'] = (
        addMoneyURL
    ) => {
        return ({
            type: actionTypes.PROFILE_SET_ADD_MONEY_URL,
            payload: {
                addMoneyURL,
            }
        });
    } 

    clearState: ProfileNS.IActionCreators['clearState'] = () => {
        return ({
            type: actionTypes.PROFILE_CLEAR_STATE,
        });
    }

}

export default new actionCreators();
