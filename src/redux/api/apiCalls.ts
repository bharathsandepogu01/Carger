import axios, {AxiosResponse} from 'axios';

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
        }

    )
}