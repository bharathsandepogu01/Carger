import AsyncStorage from '@react-native-async-storage/async-storage';
import actionCreators from '@redux/actionCreators/manageToken';
import { Dispatch } from 'react';

const manageTokenFunctions = () => {

    // store item
    const storeData = async (
        storageKey: string,
        value: string | null,
        dispatch: Dispatch<ManageTokenNS.AllActions>
    ) => {		
        const stringifiedValue = JSON.stringify(value);
        try {
            await AsyncStorage.setItem(storageKey, stringifiedValue);
            dispatch(actionCreators.setToken(stringifiedValue));
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
                const getAsyncStorageParsed = JSON.parse(getAsyncStorageData);
                dispatch(actionCreators.setToken(getAsyncStorageParsed));
                return getAsyncStorageParsed;
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

