import {StyleSheet} from 'react-native';
import {Colors, Mixins, Spacing, Typography} from '@styles/index';

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.NEAR_WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },

    topContainer: {
        height: 'auto',
        width: '100%', 
        paddingTop: 15,
        paddingLeft: '10%',
        paddingBottom: '10%',
    },

    balanceHeaderText: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.INACTIVE_TEXT,
    },

    balanceContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'flex-start',
    },

    image: {
        height: 25,
        width: 25,
        marginTop: 15,
    },

    balanceText : {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_60,
        color: Colors.NEAR_BLACK,
        marginLeft: 10,
        marginRight: 10,
    },

    currencyTypeText: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_18,
        color: Colors.NEAR_BLACK,
        alignSelf: 'flex-end',
        marginBottom: 15,
    },

    addMoneyContainer: {
        height: 80,
        marginTop: 25,
        width: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: Colors.DIESEL,
        ...Mixins.boxShadow(Colors.NEAR_BLACK, {height:1, width:1}),
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        marginTop: 30,
        ...Mixins.boxShadow('transparent', {height:0, width:0}),
    },

    button: {
        marginTop: 10,
        height: 50,
        width: 50,
        borderRadius: 100,
        alignSelf: 'flex-end',
        marginRight: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
    },

    startTransactionButton: {
        marginTop: 10,
        height: 30,
        width: 'auto',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: Colors.PRIMARY,
    },

    buttonDisabled: {
        backgroundColor: Colors.INACTIVE,
    },

    bottomContainer: {
        flex: 1,
        marginTop: 20,
        width: '100%',
    },

    transactionsHeading: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_18,
        color: Colors.NEAR_BLACK,
        paddingLeft: '10%',
        marginBottom: 15,
    },

    card: {
        height: 'auto',
        width: '100%',
        alignSelf: 'center',
        backgroundColor: Colors.NEAR_WHITE,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: '10%',
        paddingRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.INACTIVE_TEXT,
        borderTopWidth: 0.5,
    },

    alignCenter: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    typeText: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.NEAR_BLACK,
        marginBottom: 10,
    },

    dateText: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.INACTIVE_TEXT,        
    },

    numberText: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.NEAR_BLACK,
        marginBottom: 5,
    },

    dateTextBold: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.INACTIVE_TEXT,        
    },

    flewRow: {
        flexDirection: 'row',
    },

    activityIndicator: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        alignSelf: 'center',
        height: '20%',
        width: '80%',
        backgroundColor: Colors.NEAR_WHITE,
        ...Mixins.boxShadow(Colors.NEAR_BLACK),
        borderRadius: Spacing.RADIUS,
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    paddingZero: {
        paddingLeft: 0,
    },

    emptyContainer: {
        marginTop: 40,
    },

    plusText: {
        color: Colors.NEAR_WHITE,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_24,
    }
});