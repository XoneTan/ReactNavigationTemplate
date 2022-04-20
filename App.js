import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from './routes/MainStacks'
import LoginStack from './routes/LoginStack'
import { useEffect, useReducer } from "react";
import { SecureInternalStorage } from "./helper/Storage";
import SplashScreen from "./screens/Splash";
import { State } from "react-native-gesture-handler";
import * as React from 'react';
import reactNativeSecureStorage from "react-native-secure-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext();

const Drawer = createDrawerNavigator()

function App () {
    const [state,dispatch] = useReducer(
        (prevState, action) =>{
            switch(action.type){
                case 'RESTORE_TOKEN':
                    return{
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return{
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return{
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    }
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );
    useEffect(() => {
        const bootstrapAsync = async () =>{
            let userToken;
            // userToken = SecureInternalStorage.getItem(userToken)
            try{
                userToken = await SecureInternalStorage.getItem('userToken')
            }
            catch (e){
                console.warn('failed at taking user token')
            }
            dispatch({type: 'RESTORE_TOKEN', token: userToken})
        };
        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
          signIn: async (data) => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
            // In the example, we'll use a dummy token
            await SecureInternalStorage.setItem('userToken','dummy-auth-token');
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: async() => {
            // await SecureInternalStorage.removeItem('userToken');
            dispatch({ type: 'SIGN_OUT' })},
          signUp: async (data) => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
            // In the example, we'll use a dummy token
            await SecureInternalStorage.setItem('userToken','dummy-auth-token');
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );

    return(
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
              <Drawer.Navigator screenOptions={{headerShown:false}}>
                  {state.isLoading ? (
                      <Drawer.Screen name="Splash" component={SplashScreen}/>
                  ) : state.userToken == null ?(
                        <Drawer.Screen name="Login" component={LoginStack}/>    
                  ):(<Drawer.Screen name="Main" component={MainStack}/>)}
              </Drawer.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default App;
