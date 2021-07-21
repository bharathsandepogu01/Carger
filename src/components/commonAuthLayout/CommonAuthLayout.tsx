import React from "react";
import {View, Text} from 'react-native';

import Styles from './CommonAuthLayout.styles';

const CommonAuthLayout:React.FC<CommonComponentsNS.ICommonAuthLayoutProps> = (props) => {
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.headingContainer}>
                <Text style={Styles.headingStyle}>{props.heading}</Text>
            </View>
            <View style={Styles.formContainer}>
                {props.children}
            </View>
        </View>
    );
};

export default CommonAuthLayout;