import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import ElevatorStatusScreen from './app/screens/ElevatorStatusScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Welcome" options={ {headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Home" options={ {headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="ElevatorStatus" options={ {headerShown: false }} component={ElevatorStatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
