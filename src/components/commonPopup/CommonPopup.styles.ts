import {StyleSheet} from 'react-native';

import {Colors, Mixins, Typography, Spacing} from '@styles/index';

export default StyleSheet.create({

    modalContainer: {
        maxWidth: '70%',
        height: 'auto',
        backgroundColor: Colors.NEAR_BLACK,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: Spacing.RADIUS,
        padding: 5,
        marginTop: 5,
    },

    text: {
        color: Colors.NEAR_WHITE,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_12,
        marginLeft: 5,
    },

    img: {
        position: 'relative',
        height: 18,
        width: 18,
    }

});