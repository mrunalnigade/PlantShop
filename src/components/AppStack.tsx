import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation ,} from '@react-navigation/native';
import HomeScreen from './Screen/HomeScreen';
import PlantDetails from './Screen/HomeScreen/molecule/PlantDetails';

const stack = createNativeStackNavigator();

const AppStack = () => {
  return (
        <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
            <stack.Screen name="PlantDetails" component={PlantDetails}/>
        </stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})