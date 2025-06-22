// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FishTanks from '../screens/FishTanks';
import FishTankDetail from '../screens/FishTankDetail';
import AlertDetail from '../screens/AlertDetail';
import ReportDetail from '../screens/ReportDetail';
import Profiles from '../screens/Profiles';



import Login from '../screens/Login';
import BottomTabNavigator from './BottomTabNavigator'; // el menú con pestañas


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="FishTanks" component={FishTanks} options={{ title: 'Peceras' }} />
        <Stack.Screen name="FishTankDetail" component={FishTankDetail} options={{ title: 'Detalle de Pecera' }} />
        <Stack.Screen name="AlertDetail" component={AlertDetail} />
        <Stack.Screen name="ReportDetail" component={ReportDetail} />
        <Stack.Screen name="Profiles" component={Profiles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
