import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Navigation/routes'
import React from 'react';
import { useFonts } from 'expo-font'
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home'
import Doctors from './src/Doctors/Doctors'


export default function App() {
  
  const [fontsLoaded] = useFonts({
   Poppins_300Light,
   Poppins_400Regular,
   Poppins_500Medium
    
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
    <NavigationContainer>
      <Routes/>
      <StatusBar style="auto" />
    </NavigationContainer>
      
    </>
  );
}



