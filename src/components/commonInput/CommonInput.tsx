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
        setErrorMsg(null);
    }, [props.inputValue]);

    const setInput = (
        inputValidation: boolean | RegExpMatchArray,
        inputValue: string, 
        errorMsg:string,
    ) => {
        if(inputValidation){
            setErrorMsg(null);
            props.onChangeInputValue(inputValue);
        }else {
            setErrorMsg(errorMsg);
            props.onInputValidationError?(
                props.onInputValidationError(true)
            ):(null);
        }
    };

    const inputChangeDebounceFunction = useCallback(_.debounce(
        (value: string)=>{
            switch(props.inputTypeToValidate){
                case 'Email':
                    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    setInput(
                        value.match(mailFormat) || value === '', 
                        value, 
                        'Invalid email address'
                    );
                    break;
                case 'Name':
                    const aplhaNumericFormat = /^[a-zA-Z]+$/; 
                    setInput(
                        value.match(aplhaNumericFormat) || value === '', 
                        value, 
                        'Name must only include alphabets'
                    );
                    break;   
                case 'PhoneNumber':
                    const numericFormat = /^\d{10}$/;
                    setInput(
                        value.match(numericFormat) || value === '', 
                        value, 
                        'Phone number should be 10 digits'
                    );
                    break;
                case 'Password':
                    const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                    setInput(
                        value.match(passwordFormat) || value === '', 
                        value, 
                        'Password should have min 8 characters including special character, number and alphabets'
                    );
                    break;   
                case 'Number':
                    const numberFormat = /^(?!0\d)\d*(\.\d+)?$/;
                    setInput(
                        (value.match(numberFormat) && (parseInt(value) >= 0 && parseInt(value) <= 1000))  || value === '' , 
                        value, 
                        'please enter number between 1 - 1000'
                    );
                    break;
                case 'Normal':
                    setErrorMsg(null);
                    props.onChangeInputValue(value);
                    break;       
                default : 
                    break;        
            };
    }, 400), []);

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
                secureTextEntry={props.secureTextEntry}
                autoFocus={false}
            />
            <Text style={Styles.errorText}>{errorMsg}</Text>
        </View>
    );
};

export default CommonInput;