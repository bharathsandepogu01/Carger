declare namespace UserDataNS {

    type Designation = 'FrontEndDev' | 'BackEndDev' | 'MobileDev'

    interface IUserData {
        name: string;
        emailID: string;
        phoneNumber: number;
        designation: Designation;
    }

    interface IState {
        userData: IUserData[];
    }

    interface IActionTypes {
        'USER_DATA_SET_INITIAL_DATA':'USER_DATA_SET_INITIAL_DATA';
    }

    interface IATNSetInitialData {
        type: IActionTypes['USER_DATA_SET_INITIAL_DATA'];
        payload: {
            userData: IUserData[];
        }
    }

    type allActions =
        | IATNSetInitialData;

    interface IActionCreators {
        setInitialData: () => ReduxNS.IThunkFunction<allActions>;
    }
}

