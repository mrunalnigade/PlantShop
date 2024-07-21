import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextComponent from '../../../Atom/TextComponent';
import { color } from '../../../Color';

interface ITabs{
    text:string,
    index:number,
    active:number,

}

const ButtonTabs = (props:ITabs) => {
    const activeTab = props.index === props.active;
  return (
    <View style={ activeTab ? {flexDirection:'row', borderWidth:1, borderRadius:12, padding:8, backgroundColor:'#4CBB17', width:100, marginRight:16 , height:40} :{flexDirection:'row', borderWidth:1, borderRadius:12, padding:8 , width:100 , marginRight:16,height:40}}>
        <TextComponent style={ activeTab ? {fontSize:14 , color:'white' , fontWeight:'500', } : {fontSize:14 , color:color.blackColor, fontWeight:'500'}} containerStyle={{marginHorizontal:12}}  text={props.text}/>
    </View>
  )
}

export default ButtonTabs

const styles = StyleSheet.create({})