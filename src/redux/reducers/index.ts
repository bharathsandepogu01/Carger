import {combineReducers} from 'redux';

import Login from './login';
import Register from './register';
import ManageToken from './manageToken';
import Profile from './profile';
import FuelStations from './fuelStations';

export default combineReducers({
    Login,
    Register,
    ManageToken,
    Profile,
    FuelStations,
});
