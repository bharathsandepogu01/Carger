declare namespace ManageTokenNS {
    
    interface IState {
        token: string | null;
    }

    interface IActionTypes {
        MANAGE_TOKEN_SET_TOKEN: 'MANAGE_TOKEN_SET_TOKEN';
        // MANAGE_TOKEN_CLEAR_TOKEN: 'MANAGE_TOKEN_CLEAR_TOKEN';
    }

    interface IATNSetToken {
        type: IActionTypes['MANAGE_TOKEN_SET_TOKEN'];
        payload: {
            token: string | null;
        };
    }

    // interface IATNClearToken {
    //     type: IActionTypes['MANAGE_TOKEN_CLEAR_TOKEN'];
    //     payload: {
    //         token: string | null;
    //     };
    // }

    type AllActions = 
       | IATNSetToken;
    //    | IATNClearToken;

    interface IActionCreators {
        setToken: (
            token: string | null,
        ) => IATNSetToken;
        // clearToken: (
        //     token: string | null,
        // ) => ReduxNS.IThunkFunction<AllActions>;
    }

}