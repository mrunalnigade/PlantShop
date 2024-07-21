import { View, Text, TextStyle, ViewStyle } from 'react-native'
import React from 'react'

interface textProps {
    text: string,
    style?: TextStyle,
    containerStyle?: ViewStyle,
    numberOfLines?:number
}

const TextComponent = (props: textProps) => {
    return (
        <View style={props.containerStyle}>
            <Text numberOfLines={props.numberOfLines} style={props.style}>{props.text}</Text>
        </View>
    )
}

export default TextComponent