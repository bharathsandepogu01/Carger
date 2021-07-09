import { Dispatch } from 'react';

import actionTypes from '../actionTypes/profile';
import {getProfileData} from '@redux/api/apiCalls';
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
                console.log(profileDataApiResponse.data.gasTransactions[0]);
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

    clearState: ProfileNS.IActionCreators['clearState'] = () => {
        return ({
            type: actionTypes.PROFILE_CLEAR_STATE,
        });
    }

}

export default new actionCreators();
