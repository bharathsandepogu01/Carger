import {StyleSheet} from 'react-native';
import {Colors} from '@styles/index';

export default StyleSheet.create({

    container: {
        height: 'auto',
        width: '100%',
    },

    borderTopLine: {
        height: 4,
        width: '100%',
        backgroundColor: Colors.PRIMARY,
    },
    
    borderBottomLine: {
        height: 4,
        width: '100%',
        backgroundColor: Colors.SECONDARY,
    },
});