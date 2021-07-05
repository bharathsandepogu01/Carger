import React from 'react';
import {
    Text,
    TouchableOpacity,
    GestureResponderEvent,
} from 'react-native';

import Styles from './CommonButton.styles';

const CommonButton:React.FC<CommonComponentsNS.ICommonButtonProps> = (props) => {    

    const handleOnPress = (e: GestureResponderEvent) => {
        props.onClick('Hello');
    };

    const buttonDisabled = props.disabled ? Styles.buttonDisabled : null;

    return (
        <TouchableOpacity
            style = {[Styles.button, buttonDisabled, props.buttonStyle]}
            disabled = {props.disabled}
            onPress = {handleOnPress}
            activeOpacity={0.9}
        >
            <Text style={Styles.text}>{props.name}</Text>
            {props.children}
        </TouchableOpacity> 
    );
};

export default CommonButton;