import {Reducer} from 'redux';

const initialState: ManageTokenNS.IState = {
    token: null,
};

const reducer:Reducer<
    ManageTokenNS.IState,
    ManageTokenNS.AllActions
> = (state = initialState, action) => {
    switch (action.type) {
        
        case 'MANAGE_TOKEN_SET_TOKEN':
            return {
                ...state,
                token: action.payload.token,
            }

        default:
            return state;
    }
};

export default reducer;
