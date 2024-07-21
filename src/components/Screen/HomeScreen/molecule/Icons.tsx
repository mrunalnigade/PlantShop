import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconComponent from '../../../Atom/IconComponent'
import iconConstant from '../../../iconConstant'
import TextComponent from '../../../Atom/TextComponent'
import { color } from '../../../Color'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../redux/Store'

const Icons = () => {
  const counter = useSelector((state:StoreType)=> state?.Property?.count);
  return (
    <View style={{ paddingVertical:32 ,flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
        <View style={{width:'60%'}}>
        <IconComponent iconName={iconConstant.hamBurger} size={40}/>
        </View>
        <View style={{flexDirection:'row',marginTop:8, width:'30%', justifyContent:'space-between'}}>
          <View>
          <IconComponent iconName={iconConstant.suitCase} size={30} viewBox='0 0 20 20'/>
          <TextComponent text={`${counter}` ??'0'} style={{textAlign:'center', color:'white', fontWeight:'400'}} containerStyle={{position:'absolute', marginLeft:25 , backgroundColor:color.greencolor, width:20 , borderRadius:10}}/>
          </View>
            <IconComponent iconName={iconConstant.searchIcon} size={30} />
        </View>
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({})