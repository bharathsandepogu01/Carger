import {StyleSheet} from 'react-native';

import {Colors, Typography} from '@styles/index'

export default StyleSheet.create({

    container: {
        minHeight: 40,
        height: 40,
        width: '80%',
    },

    textInput: {
        color: Colors.PRIMARY,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_18,
        borderBottomWidth: 3,
        paddingLeft: 5,
        height: 45,
        width: '100%',
    },

    textInputInactive: {
        borderColor: Colors.INACTIVE,
    },

    textInputActive: {
        borderColor: Colors.PRIMARY,
    },

    textInputInValid: {
        borderColor: Colors.ERROR,
    },

    errorText: {
        color: Colors.ERROR,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_12,
        marginTop: 3,
    }

});