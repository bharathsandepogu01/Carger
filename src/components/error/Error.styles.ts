import {StyleSheet} from 'react-native';

import {Colors, Typography, Mixins} from '@styles/index';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    text: {
        marginTop: 20,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.NEAR_BLACK,
    },

    buttonStyle: {
        minHeight: 40,
        width: '50%',
        marginTop: 20,
    },

});