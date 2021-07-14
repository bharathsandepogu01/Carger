import {StyleSheet} from 'react-native';

import {Colors, Mixins, Spacing, Typography} from '@styles/index';

export default StyleSheet.create({
    
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.NEAR_WHITE,
    },

    cardDisplay: {
        height: 120,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.NEAR_WHITE,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
        padding: 15,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: Spacing.RADIUS,
    },

    mainHeading: {
        color: Colors.NEAR_BLACK,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        alignSelf: 'center',
        marginBottom: 10,
    },

    contentView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        justifyContent: 'space-between',
    },

    leftContent: {
        justifyContent: 'space-between',
        width: '70%',
    },

    rightContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    button: {
        marginTop: 20,
        height: 20,
        width: 100,
        ...Mixins.boxShadow('transparent', {height: 0, width: 0}),
    },

    loader: {
        flex: 1,
        alignSelf: 'center',
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    commonFuelType: {
        height: 20,
        width: 20,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
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

    text: {
        flexShrink: 1,
        flexWrap: 'wrap',
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.INACTIVE_TEXT,
    },

    activityIndicator: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

});