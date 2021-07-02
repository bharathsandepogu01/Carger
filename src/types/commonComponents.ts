declare namespace CommonComponentsNS {

    type ViewStyle = import('react-native').StyleProp<import('react-native').ViewStyle>;
    type ImageStyle = import('react-native').StyleProp<import('react-native').ImageStyle>;
    
    interface IDisplayImageProps {
        imageContainerStyle?: ViewStyle;
        imgStyle?: ImageStyle;
        imagePath: import('react-native').ImageSourcePropType;
    }

}