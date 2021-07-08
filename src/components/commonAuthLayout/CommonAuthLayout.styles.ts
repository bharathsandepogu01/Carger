import {StyleSheet} from 'react-native';
import {Colors, Typography, Mixins} from '@styles/index';

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
    },

    headingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '5%', 
    },

    headingStyle: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_32,
        color: Colors.NEAR_WHITE,
    },

    formContainer: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.NEAR_WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
    },

    formHeadingStyle: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_28,
        color: Colors.NEAR_BLACK,
    },

});