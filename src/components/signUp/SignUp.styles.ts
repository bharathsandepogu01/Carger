import {StyleSheet} from 'react-native';
import {Colors, Typography} from '@styles/index';

export default StyleSheet.create({
    inputBox: {
        marginTop: 15,
    },

    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    linkContainerText: {
        color: Colors.NEAR_BLACK,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
    },

    linkButton: {
        color: Colors.PRIMARY,
        fontFamily: Typography.FONT_FAMILY_BOLD,
    },
});