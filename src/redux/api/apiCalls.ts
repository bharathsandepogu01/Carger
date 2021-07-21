import axios, {AxiosResponse} from 'axios';
import { parseInt } from 'lodash';

import {url} from './url';

export const login = (
    email: string,
    password: string,
):Promise<AxiosResponse<any>> => { 
    return axios.post(
        `${url}/user/login`,
        {
            email: email,
            hashedPassword: password, 
        },
        {
            timeout: 4000,
        }
    );
};

export const register = (
    name: string,
    email: string,
    mobileNumber: number,
    password: string,
):Promise<AxiosResponse<any>> => {
    
    const registerPayload:RegisterNS.IRegisterPayload = {
        username: name,
        email: email,
        hashedPassword: password,
        phone: mobileNumber,
    };
    
    return axios.post(
        `${url}/user/register`,
        registerPayload,
        {
            timeout: 4000,
        }
    );
    
};

export const getProfileData = (
    token: string | null,
):Promise<AxiosResponse<ApiResponseNS.IProfileDataApiResponse>> => {
    
    return axios.get(
        `${url}/user/profile`,
        {
            headers: {
                Authorization: token,
            },
            timeout: 4000,
        }
    );
    
};

export const getFuelStationsData = (
    token: string | null,
    latitude: number,
    longitude: number,
):Promise<AxiosResponse<ApiResponseNS.IGasStationsApiData[]>> => {
    
    return axios.post(
        `${url}/user/gmap`,
        {
            lat: latitude,
            lng: longitude,
        },
        {
            headers: {
                Authorization: token,
            },
            timeout: 4000,
        }
    );
    
};

export const addMoneyToWallet = (
    token: string | null,
    amount: string,
):Promise<AxiosResponse<ApiResponseNS.IAddMoneyUrlResponse>> => {
    return axios.post(
        `${url}/user/add_money_to_wallet`,
        {
            amount: amount,
        },
        {
            headers: {
                Authorization: token,
            },
            timeout: 4000,
        }

    )
};

export const purchaseFuelAPICall = (
    token: string | null,
    name: string,
    type: FuelStationsNS.FuelType,
    quantity: string,
    total: string,
):Promise<AxiosResponse<any>> => {
    return axios.post(
        `${url}/user/gas_trans`,
        {
            name,
            type,
            quantity: parseFloat(quantity),
            total: parseFloat(total),
        },
        {
            headers: {
                Authorization: token,
            },
            timeout: 4000,
        }

    )
}