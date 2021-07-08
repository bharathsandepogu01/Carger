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