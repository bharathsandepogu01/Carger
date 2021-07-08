import actionTypes from '@redux/actionTypes/manageToken';

class ActionCreators implements ManageTokenNS.IActionCreators {
    
    setToken: ManageTokenNS.IActionCreators['setToken'] = (
        token
    ) => {
        return ({
            type: actionTypes.MANAGE_TOKEN_SET_TOKEN,
            payload: {
                token,
            },
        })
    }
};

export default new ActionCreators();
