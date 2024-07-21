import { View, Text, Image, ImageStyle, ImageResizeMode } from 'react-native'
import React from 'react'

interface ImageProps {
    imageSource: string,
    style: ImageStyle,
    containerStyle: ImageStyle,
    resizeMode?: ImageResizeMode
}

const ImageComponent = (props: ImageProps) => {
    const imageSource = {
        uri:props.imageSource
    }
    return (
        <View style={props.containerStyle}>
            <Image
                source={imageSource}
                resizeMode={props.resizeMode}
                style={props.style} 
                />
        </View>
    )
}

export default ImageComponent