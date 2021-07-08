import {StyleSheet} from 'react-native';
import {Colors, Typography, Mixins} from '@styles/index';

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_50,
        color: Colors.NEAR_BLACK,
        textShadowColor: Colors.NEAR_BLACK,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },

});