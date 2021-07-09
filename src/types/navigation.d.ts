declare namespace NavigationNS {

    /**
     * the below section is for type checking navigator.
     * ParamsList is an object with key as root names and value as the data params. 
     * undefined means the route has no params.
     */

    type AuthStackParamsList = {
        Login: undefined,
        SignUp: undefined,
        SplashScreen: undefined,
    };
    
    /**
     * the below section is for type checking screens.
     * annotating navigation prop and route prop which are received by screen.
     */

    type LoginScreenProps = import('@react-navigation/stack').StackScreenProps<
        AuthStackParamsList,
        'Login',
    >;
    
    type SignUpScreenProps = import('@react-navigation/stack').StackScreenProps<
        AuthStackParamsList,
        'SignUp',
    >;

    type SplashScreenAuthStackProps = import('@react-navigation/stack').StackScreenProps<
        AuthStackParamsList,
        'SplashScreen',
    >;

    interface ITabBarIconFunctionProps {
        focused: boolean;
        color: string;
        size: number; 
    }

    interface ITabBarScreeOptionsFunctionProps {
        route: import('@react-navigation/native').RouteProp<Record<string, object | undefined>, string>;
        navigation: any;
    }

}