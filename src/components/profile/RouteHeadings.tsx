import React from "react";
import {View, Text, Image} from 'react-native';

import CommonButton from "@components/commonButton";

import Styles from './Profile.styles';

const RouteHeadings = (props: ProfileNS.IRouteHeader) => {
    return (
        <CommonButton
            disabled={false}
            onClick={props.onPress}
            buttonStyle={Styles.routeContainer} 
        >
            <View style={Styles.rowContent}>
                <Image source={props.imagePath} style={Styles.routeImage}/>
                <Text style={Styles.routeText}>{props.routeHeaderName}</Text>
            </View>
            {props.showArrow?(
                <View style={Styles.routesContent}>
                    <Image source={require('@assets/images/NextArrow.png')} style={Styles.arrowImage}/>
                </View>
            ):(
                null
            )}
        </CommonButton>
    );
};

export default RouteHeadings;