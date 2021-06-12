import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateMarkerScreen from './src/screens/CreateMarkerScreen';
import EditMarkerScreen from './src/screens/EditMarkerScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Marker" component={CreateMarkerScreen} />
        <Stack.Screen name="EditMarker" component={EditMarkerScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

