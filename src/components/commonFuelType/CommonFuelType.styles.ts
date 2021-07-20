import {StyleSheet} from 'react-native';

import {Colors, Typography, Mixins, Spacing} from '@styles/index';

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.NEAR_WHITE,
    },

    text: {
        marginTop: 20,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.NEAR_BLACK,
    },

    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.PRIMARY,
    },

    cardDisplay: {
        height: '30%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.NEAR_WHITE,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
        padding: 15,
        margin: 15,
        borderRadius: Spacing.RADIUS,
        justifyContent: 'space-around',
    },

    fuelStationName: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_18,
        color: Colors.NEAR_BLACK,
        alignSelf: 'center',    
    },

    fuelDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    fuelType: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.INACTIVE_TEXT,
        alignSelf: 'flex-start',     
    },

    fuelDetails: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.INACTIVE_TEXT, 
    },

    commonFuelType: {
        height: 20,
        width: 20,
        marginRight: 5,
        marginLeft: 10,
        borderRadius: 100,
        backgroundColor: 'red',
        textAlign: 'center',
        fontFamily: Typography.FONT_FAMILY_BOLD,
        color: Colors.NEAR_BLACK,
    },
    
    petrolColor: {
        backgroundColor: Colors.PETROL,
    },

    dieselColor: {
        backgroundColor: Colors.DIESEL,
    },

    cngColor: {
        backgroundColor: Colors.CNG,
    },

    viewFlexRow: {
        flexDirection: 'row',
    }
    
});