import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextComponent from '../../../Atom/TextComponent';
import { color } from '../../../Color';
import IconComponent from '../../../Atom/IconComponent';
import iconConstant from '../../../iconConstant';

interface ITabs{
    text:any,
    index:number,
    active:number,

}

const IconTabs = (props:ITabs) => {
    const activeTab = props.index === props.active;
    //style={ activeTab ? {flexDirection:'row', borderWidth:1, borderRadius:12, padding:8, backgroundColor:'#4CBB17', width:100, marginRight:16 , height:40} :{flexDirection:'row', borderWidth:1, borderRadius:12, padding:8 , width:100 , marginRight:16,height:40}}
  return (
    <View>
        <IconComponent iconName={iconConstant.web} color={activeTab ? "white" : color.greencolor}/>
    </View>
  )
}

export default IconTabs

const styles = StyleSheet.create({})