import React, {useCallback, useEffect, useState} from "react";
import _ from 'lodash';
import {View, Text, Image, ActivityIndicator, Modal, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import actionCreators from "@redux/actionCreators/profile";
import CommonInput from "@components/commonInput";
import CommonButton from "@components/commonButton";
import TransactionsList from "./TransactionsList";
import Error from "@components/error";
import CommonPopup from "@components/commonPopup/CommonPopup";

import Styles from './Home.styles';

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const state:ProfileNS.IState = useSelector((
        state:ReduxNS.IState
    ) => state.Profile);

    const dispatch = useDispatch();
    
    useFocusEffect(useCallback(() => {
        dispatch(actionCreators.setInitialData());
        return () => {
            // console.log('component unfocused!!!');
        }
    },[]));

    useEffect(()=>{
        if(state.addMoneyURL!==null){
            setIsModalOpen(true);
        }else {
            setIsModalOpen(false);
        }
    }, [state.addMoneyURL]);

    const activeGasTransactions = state.profileData?(
        _.filter(state.profileData.gasTransactions, {'status':'initiated'})
    ):([]);

    const buttonDisability = (state.isInputValidationError || _.includes([state.addMoneyInputValue], ''));

    const dispatchSetInitialData = () => {
        dispatch(actionCreators.setInitialData());
    };  

    const dispatchSetAddMoneyInput = (inputValue: string) => {
        dispatch(actionCreators.setAddMoneyInput(inputValue));
    };

    const dispatchSetInputValidationError= () => {
        dispatch(actionCreators.setInputValidationError());
    };

    const dispatchAddMoneyToWalletURL = () => {
        dispatch(actionCreators.addMoney());
    };

    const dispatchSetAddMoneyError = (isAddMoneyError: boolean) => {
        dispatch(actionCreators.setAddMoneyError(isAddMoneyError));
    };

    const dispatchSetAddMoneyURL = (addMoneyURL: string | null) => {
        dispatch(actionCreators.setAddMoneyURL(addMoneyURL));
    };

    const handleStartTransaction = useCallback(async () => {
        const url = state.addMoneyURL?state.addMoneyURL:'';
        const supported = await Linking.canOpenURL(url);
        if(supported) {
            await Linking.openURL(url);
            dispatchSetAddMoneyURL(null);
        }else {
            dispatchSetAddMoneyError(true);
            dispatchSetAddMoneyURL(null);
        }
      }, [state.addMoneyURL!==null]);

    return (
        <View style={Styles.mainContainer}>
            <CommonPopup
                popupType={'error'}
                message={'Something went wrong, please try again'}
                isPopupOpen={state.addMoneyError}
                popupModalOpen={dispatchSetAddMoneyError}
            />
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={isModalOpen}
            >
                <View style={Styles.modalContainer}>
                    <Text style={[Styles.transactionsHeading, Styles.paddingZero]}>{'Complete your transaction'}</Text>
                    <CommonButton
                        disabled={false}
                        onClick={handleStartTransaction}
                        buttonStyle={Styles.startTransactionButton}
                        name={'proceed'}
                    >
                    </CommonButton>
                </View>
            </Modal>
            {state.isFetchError?
                    (<Error
                        onClick={dispatchSetInitialData}
                    />):
                    state.isLoading?
                    (<ActivityIndicator
                        size={'large'}
                        color={Styles.button.backgroundColor}
                        style={Styles.activityIndicator}
                        animating={state.isLoading}
                    />):
                    (<>
                        <View style={Styles.topContainer}>
                            <Text style={Styles.balanceHeaderText}>{'Current Balance'}</Text>
                            <View style={Styles.balanceContainer}>
                                <Image source={require('@assets/images/Rupee.png')} style={Styles.image}/>
                                <Text style={Styles.balanceText}>{state.profileData?.balance}</Text>
                                <Text style={Styles.currencyTypeText}>{'INR'}</Text>
                            </View>
                            <View style={Styles.addMoneyContainer}>
                                <CommonInput
                                    inputTypeToValidate={'Number'}
                                    keyboardType= {'number-pad'}
                                    inputValue={state.addMoneyInputValue}
                                    onChangeInputValue={dispatchSetAddMoneyInput}
                                    onInputValidationError={dispatchSetInputValidationError}
                                    placeHolder={'Enter amount to add in wallet'}
                                    customStyle={Styles.input}
                                />
                                <CommonButton
                                    disabled={buttonDisability}
                                    onClick={dispatchAddMoneyToWalletURL}
                                    buttonStyle={[Styles.button, buttonDisability?(Styles.buttonDisabled):(null)]}
                                    name={'+'}
                                />
                            </View>
                        </View>
                        <TransactionsList
                            gasTransactions={activeGasTransactions}
                        />
                    </>)}
        </View>
    );
};

export default Home;