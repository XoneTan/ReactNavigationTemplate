// import * as React from 'react';
// import NavContainer from './routes/Drawer.js'
// import 'react-native-gesture-handler'

// function App() {
//   return (
//    <NavContainer/>
//   );
// }


import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home.js'
import Login from './screens/Login.js'
import MainStack from './routes/MainStacks'
import LoginStack from './routes/LoginStack'


const Drawer = createDrawerNavigator()

const App = () =>{
    return(
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
              <Drawer.Screen name="Main" component={MainStack}/>
              <Drawer.Screen name="Login" component={LoginStack}/>
          </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App;
