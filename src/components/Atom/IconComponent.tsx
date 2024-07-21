import { View, Text, ViewStyle } from 'react-native'
import React from 'react';
import { SvgXml } from 'react-native-svg'

interface iconProps {
    iconName: string,
    containerStyle?: ViewStyle,
    size?: number,
    viewBox?: string,
    color?:string
}

const IconComponent = (props: iconProps) => {
    const iconValue = (name: string) => {
        if (props.iconName) {
            return `<svg width="${props.size}" height="${props.size}" stroke="${props.color? props.color : '#000'}" viewBox='0 0 20 20' fill="none" xmlns="http://www.w3.org/2000/svg">
            ${name}
        </svg>`;
        }
        else{
            return '';
        }
    }

    return (
        <View testID='icon' style={props.containerStyle}>
            {typeof props.iconName === "string" && iconValue.length > 0  && <SvgXml xml={iconValue(props.iconName)} />}
        </View>
    )
}

export default IconComponent