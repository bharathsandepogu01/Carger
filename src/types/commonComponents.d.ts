declare namespace CommonComponentsNS {

    type ViewStyle = import('react-native').StyleProp<import('react-native').ViewStyle>;
    type ImageStyle = import('react-native').StyleProp<import('react-native').ImageStyle>;
    type TextStyle = import('react-native').StyleProp<import('react-native').TextStyle>;

    type InputTypeToValidate = 'Email' | 'Name' | 'PhoneNumber' | 'Password' | 'Number' | 'Normal';
    type InputKeyBoardType = 
        'default' | 
        'numeric' | 
        'email-address' | 
        "ascii-capable" | 
        'numbers-and-punctuation' | 
        'url' |
        'number-pad' |
        'phone-pad' |
        'name-phone-pad' |
        'decimal-pad' |
        'twitter' |
        'web-search' |
        'visible-password'; 
    
    interface IDisplayImageProps {
        imageContainerStyle?: ViewStyle;
        imgStyle?: ImageStyle;
        imagePath: import('react-native').ImageSourcePropType;
    }

    interface ICommonInputProps {
        inputTypeToValidate: InputTypeToValidate;
        keyboardType: InputKeyBoardType;
        inputValue: string;
        onChangeInputValue: (...args:any) => void;
        placeHolder: string;
        customStyle: ViewStyle;
        secureTextEntry?: boolean;
    }

    interface ICommonButtonProps {
        disabled: boolean;
        onClick: (...args:any) => void;
        buttonStyle?: ViewStyle; 
        name: string;
    }

    interface ICommonAuthLayoutProps {
        heading: string;
        formContainerFlex?: ViewStyle;
    }

}