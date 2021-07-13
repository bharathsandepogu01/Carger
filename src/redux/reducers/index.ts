import {combineReducers} from 'redux';

import UserData from './userData';
import Login from './login';
import Register from './register';
import ManageToken from './manageToken';
import Profile from './profile';
import FuelStations from './fuelStations';

export default combineReducers({
    UserData,
    Login,
    Register,
    ManageToken,
    Profile,
    FuelStations,
});
