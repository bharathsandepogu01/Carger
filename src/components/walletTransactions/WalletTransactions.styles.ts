import {StyleSheet} from 'react-native';
import {Colors, Mixins, Spacing, Typography} from '@styles/index';

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.NEAR_WHITE,
    },

    card: {
        height: 'auto',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.NEAR_WHITE,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        borderLeftWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.3,
        borderTopColor: Colors.LIGHT_GREY,
        borderRightColor: Colors.LIGHT_GREY,
        borderBottomColor: Colors.LIGHT_GREY,
    },

    alignCenter: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    borderLeftYellow: {
        borderLeftColor: Colors.WARNING,
    },

    borderLeftGreen: {
        borderLeftColor: Colors.SUCCESS,
    },

    borderLeftRed: {
        borderLeftColor: Colors.ERROR,
    },

    borderLeftGrey: {
        borderLeftColor: Colors.INACTIVE_TEXT,
    },

    typeText: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.NEAR_BLACK,
        marginBottom: 10,
    },

    dateText: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.INACTIVE_TEXT,        
    },

    numberText: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.NEAR_BLACK,
        marginBottom: 5,
    }

});