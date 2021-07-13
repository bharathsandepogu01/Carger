import React from "react";
import {View, Text} from 'react-native';

import Styles from './CommonBorderLine.styles';

const CommonBorderline = (props: CommonComponentsNS.ICommonBorderProps) => {

    return (
        <View style={[Styles.container, props.containerStyle]}>
            <View style={Styles.borderTopLine}>
            </View>
            <View style={Styles.borderBottomLine}>
            </View>
        </View>
    );
};

export default CommonBorderline;