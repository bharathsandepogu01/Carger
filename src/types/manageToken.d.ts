declare namespace ManageTokenNS {
    
    interface IState {
        token: any;
    }

    interface IActionTypes {
        MANAGE_TOKEN_SET_TOKEN: 'MANAGE_TOKEN_SET_TOKEN';
    }

    interface IATNSetToken {
        type: IActionTypes['MANAGE_TOKEN_SET_TOKEN'];
        payload: {
            token: any;
        };
    }

    type AllActions = 
       | IATNSetToken;
    interface IActionCreators {
        setToken: (
            token: any,
        ) => IATNSetToken;
    }

}