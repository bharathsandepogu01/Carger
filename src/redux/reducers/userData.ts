import {Reducer} from 'redux';

const initialState:UserDataNS.IState = {
    userData: [],
};

const reducer:Reducer<
    UserDataNS.IState,
    UserDataNS.allActions
> = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_DATA_SET_INITIAL_DATA':
            return {
                ...state,
                userData: action.payload.userData,
            };
        default:
            return state;
    }
};

export default reducer;
