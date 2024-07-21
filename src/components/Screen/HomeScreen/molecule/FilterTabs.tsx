import { StyleSheet, Text, TouchableOpacity, View , FlatList } from 'react-native'
import React, { useState } from 'react'
import IconComponent from '../../../Atom/IconComponent'
import iconConstant from '../../../iconConstant'
import {Actionsheet, Slider} from 'native-base'
import TextComponent from '../../../Atom/TextComponent'
import { color } from '../../../Color'
import ButtonTabs from '../atoms/ButtonTabs'
import IconTabs from '../atoms/IconTabs'

const FilterTabs = () => {
    const [active , setClose] = useState(false);
    const [activeIndex , setActiveIndex] = useState(0)
    const [activeIcon , setActiveIcon] = useState(0)

    const data = [
        {
            name:'indoor',
            index:0
        },
        {
            name:'outdoor',
            index:1
        },
        {
            name:'garden',
            index:2
        }
    ];
    const data2 = [
        {
            name:iconConstant.droplets,
            index:0
        },
        {
            name:iconConstant.sun,
            index:1
        },
        {
            name:iconConstant.temprature,
            index:2
        }
    ]
  return (
    <View style={{ alignItems:'flex-end' , width:'100%' ,  marginVertical:20}}>
        <TouchableOpacity onPress={()=>{setClose(true)}}>
            <IconComponent iconName={iconConstant.filterIcon} size={40} />
        </TouchableOpacity>
        <Actionsheet style={{height:'100%'}} isOpen={active} onClose={()=> setClose(!active)} size={'full'}>
            <Actionsheet.Content>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%' }}>
                <TextComponent text={'FILTERS'} style={{color:color.blackColor , fontSize:30 , fontWeight:'900' }} containerStyle={{marginLeft:30}}/>
                <TouchableOpacity onPress={()=>{setClose(!active)}}>
                    <IconComponent iconName={iconConstant.crossIcon} size={30} containerStyle={{marginTop:5, marginRight:20}}/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:50, height:50}}>
                <FlatList horizontal data={data} renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity onPress={()=> setActiveIndex(item.index)}>
                            <ButtonTabs text={item.name?.toLocaleUpperCase()} index={item.index} active={activeIndex}/>
                        </TouchableOpacity>
                    )
                }}/>
            </View>
            <View style={{height:100 , width:'90%', marginTop:50}}>
                <TextComponent text={'Price Range'} style={{color:'black', fontSize:18 , fontWeight:'900',}}/>
                <Slider w="3/4" maxW="300" style={{marginTop:30}} defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10}>
                    <Slider.Track>
                    <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </View>
            <View style={{marginTop:50 , height:100 , width:'100%', flexDirection:'row'}}>
            <FlatList horizontal data={data2} renderItem={({item,index})=>{
                    const iconActive = activeIcon === index;
                    return(
                        <TouchableOpacity style={{marginLeft:20}} onPress={()=> setActiveIcon(item.index)}>
                           <View style={iconActive ? {height:50, width:55 , borderWidth:1, padding:0, borderRadius:12 , backgroundColor:color.greencolor}:{height:50, width:55 , borderWidth:1, padding:0, borderRadius:12 , backgroundColor:'white'}}>
                                <IconComponent iconName={item.name} size={25} color={iconActive ? 'white' : 'black'} containerStyle={{alignItems:'center', marginTop:10}}/>
                            </View>
                        </TouchableOpacity>
                    )
                }}/>
                <View style={{height:50, width:55 , borderWidth:1, padding:0, borderRadius:12 }}>
                    <TextComponent text={'XL ^'} style={{fontSize:14, fontWeight:'900', color:color.blackColor}}  containerStyle={{alignItems:'center', marginTop:15}}/>
                </View>
            </View>
            </Actionsheet.Content>
        </Actionsheet>
    </View>
  )
}

export default FilterTabs

const styles = StyleSheet.create({})