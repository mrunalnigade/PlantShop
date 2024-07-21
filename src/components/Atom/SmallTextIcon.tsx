import { View, Text, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import SmallTextIconStyles from './smallTextIcon.Style';
import TextComponent from './TextComponent';
import IconComponent from './IconComponent';
interface RevSmallTextIconProps {
	iconValue: number | string;
	iconName: string;
	size: number;
	iconColor: string;
	containerStyle: ViewStyle;
	textStyle?: TextStyle;
	textContainerStyle?: ViewStyle;
	iconContainerStyle?: ViewStyle;
	viewBox?: string;
}
const SmallTextIcon = (props:RevSmallTextIconProps) => {
  return (
    <View testID="smallTextIconBox">
			{(typeof props.iconValue === 'string' || props.iconValue > 0) && (
				<View
					testID="smallTextIconContainer"
					style={props.containerStyle}
				>
					{typeof props.iconColor === 'string' &&
						typeof props.iconName === 'string' &&
						(typeof props.iconValue === 'number' ||
							typeof props.iconValue === 'string') &&
						typeof props.size === 'number' &&
						typeof props.containerStyle !== 'undefined' && (
							<>
								<IconComponent
									iconName={props.iconName}
									size={props.size}
									color={props.iconColor}
									containerStyle={
										props.iconContainerStyle ??
										SmallTextIconStyles.iconContainer
									}
									viewBox={props.viewBox}
								/>
								<TextComponent
									text={props.iconValue.toString()}
									style={
										props.textStyle ??
										SmallTextIconStyles.textContainer
									}
									containerStyle={props.textContainerStyle}
								/>
							</>
						)}
				</View>
			)}
		</View>
  )
}

export default SmallTextIcon