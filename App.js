import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/Screen/HomeScreen';




const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
   <Stack.Navigator  initiaalRouteName="Home">
    <Stack.Screen 
    name= "Home" 
    component = {HomeScreen}
    options={{
      
     headerRight: () =>(
      <Button 
      title='Info'
      color="#394d00"
      onPress = { ()=> alert('my info button')}
      
      />
     ),
     
         
       
     
      title:'Home',
      headerStyle:{
        backgroundColor:"#6FB1CD",
      },
      headerTintColor:"blue",
      headerTintStyle: {
        fontWeight:'bold',

      },
    }}
    />
   
    <Stack.Screen name ="Aboutus" 
    getComponent={() => require('./src/Componets/AboutUs').default }
    options={{
      title:'WHO AM I?',
      headerStyle:{
        backgroundColor:"#6FB1CD",
      },
      headerTintColor:"blue",
      headerTintStyle: {
        fontWeight:'bold',

      },
    }}
     />
     <Stack.Screen name ="CreditsM" 
    getComponent={() => require('./src/Componets/Credits').default }
    options={{
      title:'Credits',
      headerStyle:{
        backgroundColor:"#6FB1CD",
      },
      headerTintColor:"blue",
      headerTintStyle: {
        fontWeight:'bold',

      },
    }}
     />

   </Stack.Navigator>

   
    </NavigationContainer>
   
  );
}

