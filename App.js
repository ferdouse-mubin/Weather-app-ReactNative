import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WeatherScreen from './components/WeatherScreen';
import ForecastScreen from './components/ForecastScreen';
import DeviceApi from './components/DeviceAPI';


const Tab = createMaterialTopTabNavigator();




const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator >
        <Tab.Screen name ="WeatherScreen" component = {WeatherScreen}/>
        <Tab.Screen name ="Forecast" component = {ForecastScreen}/>
        <Tab.Screen name ="DeviceAPI" component = {DeviceApi}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
