import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home.js';

const Stack = createStackNavigator();

function Navigator() {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
    
}
export default Navigator
