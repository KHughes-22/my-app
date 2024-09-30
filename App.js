import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import FilmLog from './FilmLog';
import LightMeter from './AmbientLightMeter';
import ViewFinder from './ViewFinder';
import AmbientLightMeter from './AmbientLightMeter';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FilmLog" component={FilmLog} />
        <Stack.Screen name="AmbientLightMeter" component={AmbientLightMeter} />
        <Stack.Screen name="ViewFinder" component={ViewFinder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

