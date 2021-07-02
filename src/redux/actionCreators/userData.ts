import actionTypes from '../actionTypes/userData';

class actionCreators implements UserDataNS.IActionCreators {
    setInitialData: UserDataNS.IActionCreators['setInitialData'] = () => {
        return async(dispatch, getState) => {
            console.log(getState().userData);
            dispatch({
                type: actionTypes.USER_DATA_SET_INITIAL_DATA,
                payload: {
                    userData: [{
                        name: 'bharath',
                        emailID: 'bharathjohn57@gmail.com',
                        phoneNumber: 7093936212,
                        designation: 'MobileDev',
                    }],
                },
            });
        };
    };
}

export default actionCreators;
