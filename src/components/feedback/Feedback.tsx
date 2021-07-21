import React from "react";
import {View, Text} from 'react-native';

import Styles from './Feedback.styles';

const Feedback = () => {
    return (
        <View>
            <Text style={Styles.text}>
                {'Feedback Screen'}
            </Text>
        </View>
    );
};

export default Feedback;