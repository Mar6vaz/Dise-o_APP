// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Home'; // Aquí es donde está tu botón "Iniciar Sesión"
import Login from '../screens/Login';
import FishTanks from '../screens/FishTanks';
import FishTankDetail from '../screens/FishTankDetail';
import AlertDetail from '../screens/AlertDetail';
import ReportDetail from '../screens/ReportDetail';
import Profiles from '../screens/Profiles';
import BottomTabNavigator from './BottomTabNavigator'; // menú inferior

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/*  Pantalla inicial con botón para iniciar sesión */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        {/* Login y navegación posterior */}
        <Stack.Screen name="Login" component={Login} />

        {/*Después del login se redirige aquí (ya con tabs) */}
        <Stack.Screen name="FishTanks" component={FishTanks} options={{ title: 'Peceras' }} />
        <Stack.Screen name="FishTankDetail" component={FishTankDetail} options={{ title: 'Detalle de Pecera' }} />
        <Stack.Screen name="AlertDetail" component={AlertDetail} />
        <Stack.Screen name="ReportDetail" component={ReportDetail} />
        <Stack.Screen name="Profiles" component={Profiles} />

        {/*  Menú de pestañas si deseas agregarlo tras login */}
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
