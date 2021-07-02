import React from "react";
import {View, Text} from 'react-native';
import Styles from './Profile.styles';

const Profile = () => {
    return (
        <View>
            <Text style={Styles.text}>
                {'Profile Screen'}
            </Text>
        </View>
    );
};

export default Profile;