import React, {
    useEffect, 
    useState, 
    useCallback
} from "react";
import _ from 'lodash';
import {
    View,
    TextInput, 
    Text,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';

import Styles from './CommonInput.styles';

const CommonInput = (props: CommonComponentsNS.ICommonInputProps) => {

    const [inputValue, setInputValue] = useState(props.inputValue);
    const [errorMsg, setErrorMsg] = useState<string|null>(null);

    useEffect(()=>{
        setInputValue(props.inputValue);
    }, [props.inputValue]);

    const inputChangeDebounceFunction = useCallback(_.debounce(
        (value: string)=>{
            switch(props.inputTypeToValidate){
                case 'Email':
                    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if(value.match(mailFormat) || value === ''){
                        setErrorMsg(null);
                        props.onChangeInputValue(value);
                    }else {
                        setErrorMsg('Invalid email address');
                    };
                    break;
                case 'Name':
                    const aplhaNumericFormat = /^[0-9a-zA-Z]+$/;
                    if(value.match(aplhaNumericFormat) || value === ''){
                        setErrorMsg(null);
                        props.onChangeInputValue(value);
                    }else {
                        setErrorMsg('Name should be alpha-numeric');
                    }; 
                    break;   
                case 'PhoneNumber':
                    const numericFormat = /^\d{10}$/;
                    if(value.match(numericFormat) || value === ''){
                        setErrorMsg(null);
                        props.onChangeInputValue(value);
                    }else {
                        setErrorMsg('Phone number should be 10 digits');
                    };
                    break;
                case 'Password':
                    const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                    if(value.match(passwordFormat) || value === ''){
                        setErrorMsg(null);
                        props.onChangeInputValue(value);
                    }else {
                        setErrorMsg('Password should have min 8 characters including special character, number and alphabets');
                    };
                    break;   
                case 'Number':
                    const numberFormat = /^\d*$/;
                    if((value.match(numberFormat) && (parseInt(value) >= 100 && parseInt(value) <= 1000))  || value === '' ){
                        setErrorMsg(null);
                        props.onChangeInputValue(value);
                    }else {
                        setErrorMsg('please enter number between 100 - 1000');
                    };
                    break;
                case 'Normal':
                    setErrorMsg(null);
                    props.onChangeInputValue(value);
                    break;       
                default : 
                    break;        
            };
    }, 500), []);

    const handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = e.nativeEvent.text;
        setInputValue(value);
        inputChangeDebounceFunction(value);
    };

    const borderStyle = (errorMsg===null) ? Styles.textInputActive : Styles.textInputInValid;

    return (  
        <View style={[Styles.container, props.customStyle]}>  
            <TextInput
                keyboardType={props.keyboardType}
                value={inputValue}
                onChange={handleOnChange}
                style={[Styles.textInput, borderStyle]}
                placeholder={props.placeHolder}
                placeholderTextColor={Styles.textInputInactive.borderColor}
                autoFocus={false}
                secureTextEntry={props.secureTextEntry}
            />
            <Text style={Styles.errorText}>{errorMsg}</Text>
        </View>
    );
};

export default CommonInput;