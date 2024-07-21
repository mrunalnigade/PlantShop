import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Plant from '../atoms/Plant'
import iconConstant from '../../../iconConstant'
import { StoreType } from '../../../redux/Store'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const PlantsList = () => {
    const PropertyDetails = useSelector((state:StoreType)=> state?.Property?.result );
    const navigation = useNavigation();
  return (
    <View style={{marginTop:40, flex:1}}>
        {Array.isArray(PropertyDetails?.products) && PropertyDetails?.products?.length > 0 &&  <FlatList showsHorizontalScrollIndicator={false} horizontal data={PropertyDetails?.products} renderItem={({item,index})=>{
            return(
                <TouchableOpacity onPress={()=>{navigation.navigate('PlantDetails',{})}}>
                    <Plant plantText={item.product_name} description={item.description} image={item.productImage} priceText={item.selling_price} imageStyle={{width:200 , height: 200, alignSelf:'center', borderRadius:12}}/>
                </TouchableOpacity>
            )
        }}/>}
    </View>
  )
}

export default PlantsList

const styles = StyleSheet.create({})