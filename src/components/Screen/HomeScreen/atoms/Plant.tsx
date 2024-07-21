import { ImageStyle, ImageURISource, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextComponent from '../../../Atom/TextComponent'
import ImageComponent from '../../../Atom/ImageComponent'
import IconComponent from '../../../Atom/IconComponent'
import iconConstant from '../../../iconConstant'
import { color } from '../../../Color'
import { useDispatch } from 'react-redux'
import { increment } from '../../../redux/PropertySlice'

interface IPlant{
    plantText:string,
    description:string,
    image:string,
    priceText:number,
    imageStyle:ImageStyle
}
const Plant = (props:IPlant) => {
  const dispatch = useDispatch();
  return (
    <View style={{borderWidth:1, borderRadius:12,borderColor:color.iconColor, width:300, height:400, marginHorizontal:10 , backgroundColor:'#CBC3E3'}}>
      <View style={{paddingHorizontal:40, paddingVertical:20}}>
      <TextComponent text={props.plantText} numberOfLines={1} style={{fontSize:22, color:'black', fontWeight:'500', width:'100%'}}/>
      <TextComponent text={props.description} numberOfLines={1} style={{fontSize:12 , color:'black', width:'90%', marginTop:4}}/>
      </View>
      <ImageComponent imageSource={props.image} resizeMode='cover' style={props.imageStyle} containerStyle={{marginVertical:10}}/>
      <View style={{flexDirection:'row', width:'100%' , justifyContent:'space-between'}}>
        <TextComponent text={`$${props.priceText}`} style={{color:color.blackColor, fontSize:17, fontWeight:'500'}} containerStyle={{justifyContent:'center', marginTop:20 , marginLeft:50}}/>
        <TouchableOpacity onPress={()=> dispatch(increment(1))}>
        <IconComponent iconName={iconConstant.addIcon} size={30} color={color.greyWhiteColor} containerStyle={{borderWidth:1, borderColor:color.iconColor ,height:60 , width:60, paddingTop:15, paddingLeft:15 , borderTopLeftRadius:12 , borderBottomRightRadius:12 , backgroundColor:color.greencolor, marginTop:29}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Plant

const styles = StyleSheet.create({})