import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/components/Screen/HomeScreen'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { store } from './src/components/redux/Store'
import MainScreen from './src/components/MainScreen';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <NativeBaseProvider>
      <Provider store={store}>
        <View style={{flex:1}}>
          <MainScreen/>
        </View>
      </Provider>
    </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App