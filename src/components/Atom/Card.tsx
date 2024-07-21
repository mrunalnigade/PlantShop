import { View, Text, ViewStyle, ImageURISource, ImageResizeMode, TouchableOpacity } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent';
import { cardStyles } from './Crd.Style';
import TextComponent from './TextComponent';
import SmallTextIcon from './SmallTextIcon';
import iconConstant from '../iconConstant';
import IconComponent from './IconComponent';
interface CardProps {
	imageSource: ImageURISource;
	price: string;
	address: string;
	bed: number;
	bath: number;
	car: number;
	propertyType?: string;
	containerStyle?: ViewStyle;
	numberOfLine?: number;
	containerHeadingStyle?: ViewStyle;
	resizeMode?:ImageResizeMode;
	addressContainerStyle?:ViewStyle
}
const Card = (props:CardProps) => {
  return (
    <View testID="saleComponent" style={props.containerStyle}>
			<ImageComponent
				imageSource={props.imageSource}
				containerStyle={{borderRadius:12}}
				style={cardStyles.imageStyle}
				resizeMode={props.resizeMode}
			/>
			<View
				testID="revTextComponent"
				style={cardStyles.textComponent}
			>
				<View
					testID="HeadingBadgeComponent"
					style={cardStyles.saleMethodTab}
				>
					{typeof props.price === 'string' && props.price != '$0' && (
						<TextComponent
							style={cardStyles.text}
							numberOfLines={props.numberOfLine}
							containerStyle={props.containerHeadingStyle}
							text={props.price}
						/>
					)}
				</View>
				{typeof props.address === 'string' && (
					<TextComponent
						text={props.address}
						style={cardStyles.address}
						numberOfLines={props.numberOfLine}
						containerStyle={props.addressContainerStyle}
					/>
				)}
				<View style={cardStyles.info} testID="infoContainer">
					{typeof props.bed === 'number' && (
						<SmallTextIcon
							iconValue={props.bed}
							iconName={iconConstant.discover}
							size={18}
							iconColor={'#666666'}
							containerStyle={cardStyles.iconContainer}
							textStyle={cardStyles.textStyle}
						/>
					)}
					{typeof props.bath === 'number' && (
						<SmallTextIcon
							iconValue={props.bath}
							iconName={iconConstant.discover}
							size={18}
							iconColor={'#666666'}
							containerStyle={
								cardStyles.iconContainerSecond
							}
							textStyle={cardStyles.textStyle}
						/>
					)}
					{typeof props.car === 'number' && (
						<SmallTextIcon
							iconValue={props.car}
							iconName={iconConstant.userCircle}
							size={18}
							iconColor={'#666666'}
							containerStyle={
								cardStyles.iconContainerSecond
							}
							textStyle={cardStyles.textStyle}
						/>
					)}
					{typeof props.propertyType === 'string' && (
						// <TextComponent
						// 	text={props.propertyType}
						// 	style={cardStyles.listingType}
						// 	containerStyle={cardStyles.statusTextStyle}
						// />
						<TouchableOpacity>
							<IconComponent iconName={iconConstant.heart} containerStyle={cardStyles.heartstatusTextStyle} size={20}/>
						</TouchableOpacity>
					)}
				</View>
			</View>
		</View>

  )
}

export default Card