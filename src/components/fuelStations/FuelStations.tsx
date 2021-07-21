import React, {useCallback} from "react";
import _ from "lodash";
import {View, ActivityIndicator, PermissionsAndroid} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import GeoLocation from 'react-native-geolocation-service';

import Error from "@components/error";
import actionCreators from '@redux/actionCreators/fuelStations';
import FuelStationsList from "./FuelStationsList";
import {Colors} from '@styles/index';

import Styles from './FuelStations.styles';

const FuelStations = () => {

    const state:FuelStationsNS.IState = useSelector((
        state:ReduxNS.IState
    ) => state.FuelStations);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const requestLocationPermission = async() => {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            GeoLocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    dispatch(actionCreators.setInitialData(
                        latitude,
                        longitude
                    ));
                }, 
                (error) => {
                    dispatch(actionCreators.setError(true, 'please allow location access'));
                }, 
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 10000
                }
            );
          } else {
            dispatch(actionCreators.setError(true, 'please allow location access'));
          }
        } catch (err) {
          dispatch(actionCreators.setError(true, 'something went wrong, please try again'));
        }
      };
      

    useFocusEffect(
        useCallback(() => {
          (async () => await requestLocationPermission())();
          return () => {
            //   console.log('fuel stations Screen unfocused');
          };
        }, [])
    ); 

    const dispatchSetSelectedFuelStation = (fuelStationID: string) => {
        dispatch(actionCreators.setSelectedFuelStation(fuelStationID, navigation));
    };

    const {fuelStationsData} = state;

    return (
        <View style={Styles.mainContainer}>  
            {state.isFetchError?
            (<Error
                onClick={requestLocationPermission}
                errorMessage={state.errorMessage!==null?(
                    state.errorMessage
                ):(
                    'Something went wrong, please try again.'
                )}
            />):
            state.isLoading?
            (<ActivityIndicator
                size={'large'}
                color={Colors.PRIMARY}
                style={Styles.activityIndicator}
                animating={state.isLoading}
            />):
            (<FuelStationsList 
                fuelStationsData={fuelStationsData}
                navigationFunction={dispatchSetSelectedFuelStation}
            />)}
        </View>
    );
};

export default FuelStations;