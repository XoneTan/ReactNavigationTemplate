import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login.js'
import Register from'../screens/Register.js'

const Stack = createStackNavigator();

function Navigator() {
    return(
        <Stack.Navigator initialRouteName='Login Page'>
            <Stack.Screen name='Login Page' component={Login}/>
            <Stack.Screen name='Register Page' component={Register}/>
        </Stack.Navigator>
    )
}
export default Navigator
