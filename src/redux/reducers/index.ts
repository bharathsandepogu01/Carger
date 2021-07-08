import {combineReducers} from 'redux';

import UserData from './userData';
import Login from './login';
import Register from './register';
import ManageToken from './manageToken';

export default combineReducers({
    UserData,
    Login,
    Register,
    ManageToken,
});
