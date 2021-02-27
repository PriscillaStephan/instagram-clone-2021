import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyddOcvyr1WoygBIRUsMbtFr2xWvNfeOc",
  authDomain: "instagram-dev-116bb.firebaseapp.com",
  projectId: "instagram-dev-116bb",
  storageBucket: "instagram-dev-116bb.appspot.com",
  messagingSenderId: "205084692978",
  appId: "1:205084692978:web:1976562e5fc4b4e5521b6b",
  measurementId: "G-EJHMSEFW84"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


const Stack = createStackNavigator();
export default function App() {   
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>

    );
}

