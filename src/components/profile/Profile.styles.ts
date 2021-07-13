import {StyleSheet} from 'react-native';
import {Colors, Typography, Mixins} from '@styles/index';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.NEAR_WHITE,
    },

    headerContainer: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
    },

    contentContainer: {
        flex: 5,
        marginTop: -50,
        width: '90%',
        alignSelf: 'center',

    },

    content: {
        minHeight: '85%',
        width: '100%',
        backgroundColor: Colors.NEAR_WHITE,
        alignSelf: 'center',
        borderRadius: 10,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
    },

    infoContainer: {
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GREY,
    },

    name: {
        color: Colors.NEAR_BLACK,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_24,
    },

    email: {
        color: Colors.INACTIVE_TEXT,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_18, 
        marginTop: 10,      
    },

    routesContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    routeContainer: {
        height: 'auto',
        width: '100%',
        marginTop: 0,
        backgroundColor: Colors.NEAR_WHITE,
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GREY,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 0,
        ...Mixins.boxShadow('transparent', {height: 0, width: 0}),
    },

    rowContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    routeText: {
        color: Colors.NEAR_BLACK,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_18,
        marginLeft: 15,
    },

    routeImage: {
        height: 26,
        width: 26,
    },

    arrowImage: {
        height: 18,
        width: 18,
    },

    activityIndicator: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileImage: {
        height: 70,
        width: 70,
        marginBottom: 10,
    },

});