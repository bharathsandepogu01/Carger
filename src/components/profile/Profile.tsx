import React, {useCallback} from "react";
import {View, Text, ActivityIndicator} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import Error from "@components/error";
import RouteHeadings from "./RouteHeadings";
import actionCreators from '@redux/actionCreators/profile';

import Styles from './Profile.styles';

const Profile = () => {

    const state:ProfileNS.IState = useSelector((
        state:ReduxNS.IState
    ) => state.Profile);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
          dispatch(actionCreators.setInitialData());
          return () => {
              dispatch(actionCreators.clearState());
          };
        }, [])
      );

    const dispatchSetInitialData = () => {
        dispatch(actionCreators.setInitialData());
    }  

    const handleOnClickTransactions = () => {
        navigation.navigate('WalletTransactions');
    };

    const handleOnClickFuelPurchase = () => {
        
    };

    const handleOnClickFeedBack = () => {

    };

    const handleOnClickLogOut = () => {
        dispatch(actionCreators.logout());
    };

    const {profileData} = state;

    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.headerContainer}>
            </View>
            <View style={Styles.contentContainer}>                
                <View style={Styles.content}>
                    {state.isFetchError?
                    (<Error
                        onClick={dispatchSetInitialData}
                    />):
                    state.isLoading?
                    (<ActivityIndicator
                        size={'large'}
                        color={Styles.headerContainer.backgroundColor}
                        style={Styles.activityIndicator}
                        animating={state.isLoading}
                    />):
                    (<>
                    <View style={Styles.infoContainer}>
                        <Text style={Styles.name}>{profileData?.username}</Text>
                        <Text style={Styles.email}>{profileData?.email}</Text>
                    </View>
                    <View style={Styles.routesContent}>
                        <RouteHeadings
                            imagePath={require('@assets/images/MoneyTransfer.png')}
                            onPress={handleOnClickTransactions}
                            routeHeaderName={'Wallet Transactions'}
                            showArrow={true}
                        />
                        <RouteHeadings
                            imagePath={require('@assets/images/BuyFuel.png')}
                            onPress={handleOnClickLogOut}
                            routeHeaderName={'Purchase History'}
                            showArrow={true}
                        />
                        <RouteHeadings
                            imagePath={require('@assets/images/FeedBack.png')}
                            onPress={handleOnClickFeedBack}
                            routeHeaderName={'Feedback'}
                            showArrow={true}
                        />
                        <RouteHeadings
                            imagePath={require('@assets/images/LogOut.png')}
                            onPress={handleOnClickLogOut}
                            routeHeaderName={'Log Out'}
                            showArrow={false}
                        />
                    </View>
                    </>)}
                </View>
            </View>
        </View>
    );
};

export default Profile;