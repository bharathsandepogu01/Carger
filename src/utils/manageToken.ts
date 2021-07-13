import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'react';

import actionCreators from '@redux/actionCreators/manageToken';

const manageTokenFunctions = () => {

    // store item
    const storeData = async (
        storageKey: string,
        value: any,
        dispatch: Dispatch<ManageTokenNS.AllActions>
    ) => {		
        try {
            await AsyncStorage.setItem(storageKey, value);
            dispatch(actionCreators.setToken(value));
        } catch (e) {
            dispatch(actionCreators.setToken(null));
        }
    };

    // get item
    const getData = async (
        storageKey: string,
        dispatch: Dispatch<ManageTokenNS.AllActions>
    ) => {
        try {
            const getAsyncStorageData = await AsyncStorage.getItem(storageKey);
            if(getAsyncStorageData!==null){
                dispatch(actionCreators.setToken(getAsyncStorageData));
            }else {
                dispatch(actionCreators.setToken(null));
            }
        } catch(e) {
            dispatch(actionCreators.setToken(null));
        }
    };

    // clear item
    const clearToken = async(
        storageKey: string,
        dispatch: Dispatch<ManageTokenNS.AllActions>
    ) => {
        try{
            await AsyncStorage.removeItem(storageKey);
            dispatch(actionCreators.setToken(null));
        }catch(e){
            dispatch(actionCreators.setToken(null));
        }
    };

    return  {
        storeData,
        getData,
        clearToken
    }
};

export default manageTokenFunctions();

