import * as React from 'react';
import { View, Text, Touchable, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { AuthContext } from '../App';
import SecureInternalStorage from '../helper/Storage';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const { signIn } = React.useContext(AuthContext);
  // React.useEffect(()=>{
  //   const setToken = async() =>{
  //     await SecureInternalStorage.setItem(userToken, email)
  //   }
  // })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput placeholder='Email' onChange={(email)=>setEmail(email)}/>
      <TextInput placeholder='Password' secureTextEntry ={true} onChange={(Password)=>setPassword(Password)}/>
      <Button title="Sign in" onPress={() => signIn({ email, Password })} />
      <Button onPress={() => navigation.navigate('Register Page')} title="Go To Register"/>
    </View>
  );
}