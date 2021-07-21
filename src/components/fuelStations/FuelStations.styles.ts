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
        paddingLeft: 5,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: Spacing.RADIUS,
        borderWidth: 0.3,
        borderColor: Colors.LIGHT_GREY,
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
        paddingLeft: 10,
    },

    leftContent: {
        justifyContent: 'space-between',
        width: '70%',
    },

    rightContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
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