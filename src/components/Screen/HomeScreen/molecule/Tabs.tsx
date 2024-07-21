import { StyleSheet, Text, TouchableOpacity, View , FlatList} from 'react-native'
import React, { useState } from 'react'
import TextComponent from '../../../Atom/TextComponent'
import Tab from '../atoms/Tab'

const Tabs = () => {
    const [activeindex , setIndex] = useState(0);
    const [active, setActive] = useState(false);
    const data=[
        {
            index:0,
            title:'Concept',
        },
        {
            index:1,
            title:'Popular',
        },
        {
            index:2,
            title:'New'
        }
    ];
    const onPressComponent = (index:number) =>{
        setIndex(index);
    }
  return (
    <View style={{marginTop:100}}>
      <FlatList horizontal data={data} renderItem={({item, index})=>{
        return(
            <TouchableOpacity onPress={()=>{onPressComponent(item.index)}}>
                <Tab text={item.title} index={activeindex} active={item.index}/>
            </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({})