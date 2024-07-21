import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AppStack from './AppStack'
import { useDispatch } from 'react-redux';
import { fetchPorpertyInfo } from './redux/asyncActions';

const MainScreen = () => {
  return (
      <AppStack/>
  )
}

export default MainScreen