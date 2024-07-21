import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextComponent from '../../../Atom/TextComponent'
import { color } from '../../../Color';

interface ITabs{
    text:string,
    index:number,
    active:number,

}
const Tab = (props:ITabs) => {
    const activeTab = props.index === props.active;
    console.log('the index', props.index , 'the tab' , props.active , 'the boolean value' , props.index === props.active)
  return (
    <View style={{marginRight:40}}>
        <TextComponent style={ activeTab ? {fontSize:18 , color:'black' , fontWeight:'800'} : {fontSize:18 , color:color.border, fontWeight:'800'}}  text={props.text}/>
        <View style={ activeTab && {borderBottomColor:color.greencolor , borderBottomWidth:4 , width:20 , marginTop:3}} />
    </View>
  )
}

export default Tab

const styles = StyleSheet.create({})