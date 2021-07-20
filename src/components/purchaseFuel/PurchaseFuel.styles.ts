import {StyleSheet} from 'react-native';

import {Colors, Typography, Mixins, Spacing} from '@styles/index';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.NEAR_WHITE,
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
        borderColor: Colors.PRIMARY,
        borderWidth: 0.5,
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
        color: Colors.NEAR_BLACK, 
    },

    viewFlexRow: {
        flexDirection: 'row',
    },

    unSelectedBackground: {
        backgroundColor: Colors.NEAR_WHITE,
        ...Mixins.boxShadow('transparent'),
        paddingBottom: 7,
        paddingTop: 7,
        borderRadius: Spacing.RADIUS,
        color: Colors.INACTIVE_TEXT,
    },

    selectedBackGround: {
        backgroundColor: Colors.SECONDARY,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
        paddingRight: 8,
        paddingBottom: 7,
        paddingTop: 7,
        borderRadius: 100,
        color: Colors.NEAR_WHITE,
    },

    viewFlexRowSpaceEven: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40,
    },

    input: {
        marginTop: 30,
        alignSelf: 'center',
    },

    button: {
        alignSelf: 'center',
    }

});