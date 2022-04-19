import * as React from 'react';
import { View, Text, Touchable, Button } from 'react-native';
import { AuthContext } from '../App';

export default function HomeScreen() {
  const {signOut} = React.useContext(AuthContext)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Sign Out' onPress={signOut}/>
    </View>
  );
}