declare namespace ReduxNS {
  interface IState {
    userData: string;
  }

  interface IThunkFunction<Actions> {
      (
          dispatch: import('react').Dispatch<Actions>,
          getAppState: () => ReduxNS.IState,
      ): void;
  }
}

