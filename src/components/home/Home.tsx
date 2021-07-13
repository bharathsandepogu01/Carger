import React from "react";
import {View, Text} from 'react-native';

import Styles from './Home.styles';

const Home = () => {
    return (
        <View>
            <Text style={Styles.text}>
                {'Home Screen'}
            </Text>
        </View>
    );
};

export default Home;