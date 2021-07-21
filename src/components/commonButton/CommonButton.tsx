import React from 'react';
import {
    Text,
    TouchableOpacity,
    GestureResponderEvent,
    ActivityIndicator
} from 'react-native';

import Styles from './CommonButton.styles';

const CommonButton:React.FC<CommonComponentsNS.ICommonButtonProps> = (props) => {    

    const handleOnPress = (e: GestureResponderEvent) => {
        props.onClick();
    };

    const buttonDisabled = props.disabled ? Styles.buttonDisabled : null;

    return (
        <TouchableOpacity
            style = {[Styles.button, buttonDisabled, props.buttonStyle]}
            disabled = {props.disabled}
            onPress = {handleOnPress}
            activeOpacity={0.9}
        >   
            {props.name?(
                <Text style={Styles.text}>{props.name}</Text>
            ):(null)}
            {props.children}
            {props.isLoading?(
                <ActivityIndicator 
                    animating={true} 
                    size={'small'} 
                    color={Styles.text.color}
                />
            ):(
                null
            )}
        </TouchableOpacity>     
    );
};

export default CommonButton;