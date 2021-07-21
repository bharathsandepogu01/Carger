import React from "react";
import {View, Modal, Text, Image} from 'react-native';

import Styles from './CommonPopup.styles';

const CommonPopup = (props: CommonComponentsNS.ICommonPopupProps) => {

    let IconToDisplayUrl = () => {
        switch(props.popupType){
            case 'error':
                return require('@assets/images/Error.png');
            case 'success':
                return require('@assets/images/Success.png');
            case 'warning':
                return require('@assets/images/Warning.png');
            case 'info':
                return require('@assets/images/Info.png');    
            default:
                return require('@assets/images/Info.png');        
        }
    };

    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={props.isPopupOpen}
            onShow={()=> {
                setTimeout(()=>{
                    props.popupModalOpen(false);
                }, 1800);
            }}
        >
            <View style={Styles.modalContainer}>
                <Image source={IconToDisplayUrl()} style={Styles.img}/>
                <Text style={Styles.text}>{props.message}</Text>
            </View>
        </Modal>
    );
};

export default CommonPopup;