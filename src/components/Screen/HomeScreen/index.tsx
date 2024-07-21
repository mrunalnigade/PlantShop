import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Icons from './molecule/Icons'
import Tabs from './molecule/Tabs'
import FilterTabs from './molecule/FilterTabs'
import PlantsList from './molecule/PlantsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPorpertyInfo } from '../../redux/asyncActions'
import { StoreType } from '../../redux/Store'
import Loader from '../../Atom/Loader'

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPorpertyInfo())
  },[]);
  const loading = useSelector((state:StoreType)=>state?.Property?.loading);
  return (
    <View style={{paddingHorizontal:16,flex:1}}>
      {loading && <Loader/>}
      {!loading &&
       <><Icons /><Tabs /><FilterTabs /><PlantsList />
       </>}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})