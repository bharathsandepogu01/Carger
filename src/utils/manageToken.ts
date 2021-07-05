import AsyncStorage from '@react-native-async-storage/async-storage';
import { Value } from 'react-native-reanimated';

// store item
const storeData = async (
    storageKey: string,
    value: string,
) => {		
    try {
        await AsyncStorage.setItem(storageKey, JSON.stringify(value));
    } catch (e) {
        console.warn(e);
    }
};

// get item
const getData = async (
    storageKey: string,
) => {
    try {
        const getAsyncStorageData = await AsyncStorage.getItem(storageKey);
        if(getAsyncStorageData!==null){
            const getAsyncStorageParsed = JSON.parse(getAsyncStorageData);
            return getAsyncStorageParsed;
        }else {
            return null;
        }
    } catch(e) {
        console.warn(e);
    }
};

export {
    storeData,
    getData,
}