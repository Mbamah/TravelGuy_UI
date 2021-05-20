// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler' 
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home'
import onBoarding from './src/screens/onBoarding'
import Details from './src/screens/Details'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="onBoarding" component={onBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

