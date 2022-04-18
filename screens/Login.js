import * as React from 'react';
import { View, Text, Touchable, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput placeholder='Email' onChange={(email)=>setEmail(email)}/>
      <TextInput placeholder='Password' secureTextEntry ={true} onChange={(Password)=>setPassword(Password)}/>
      <Button onPress={() => navigation.navigate('Main')} title="Login"/>
      <Button onPress={() => navigation.navigate('Register Page')} title="Go To Register"/>
    </View>
  );
}