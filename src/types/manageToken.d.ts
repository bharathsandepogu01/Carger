declare namespace ManageTokenNS {
    
    interface IState {
        token: string | null;
    }

    interface IActionTypes {
        MANAGE_TOKEN_SET_TOKEN: 'MANAGE_TOKEN_SET_TOKEN';
    }

    interface IATNSetToken {
        type: IActionTypes['MANAGE_TOKEN_SET_TOKEN'];
        payload: {
            token: string | null;
        };
    }

    type AllActions = 
       | IATNSetToken;
    interface IActionCreators {
        setToken: (
            token: string | null,
        ) => IATNSetToken;
    }

}