import {StyleSheet} from 'react-native';

import {Colors, Mixins, Typography, Spacing} from '@styles/index'

export default StyleSheet.create({

    container: {
        minHeight: 40,
        height: 50,
        width: '80%',
        marginTop: 40,
    },

    button: {
        minHeight: 40,
        height: 50,
        width: '80%',
        marginTop: 40,
        backgroundColor: Colors.PRIMARY,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
        borderRadius: Spacing.RADIUS,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    text: {
        color: Colors.NEAR_WHITE,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_20,
    },

    buttonDisabled: {
        backgroundColor: Colors.INACTIVE,
    },
});