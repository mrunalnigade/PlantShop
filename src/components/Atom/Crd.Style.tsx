import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
	info: {
		flexDirection: 'row',
		marginTop: 4
	},
	image: {
		borderRadius: 8
	},
	textComponent: {
		marginLeft: 12,
		marginVertical: 16,
		justifyContent: 'space-around'
	},
	text: {
		fontWeight:'700',
		fontSize: 16,
		lineHeight: 24,
		color: '#333333'
	},
	address: {
		marginTop: 4,
		fontFamily: 'DM Sans',
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 20,
		fontStyle: 'normal',
		color: '#666666'
	},
	imageStyle: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		margin: 0,
		padding: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		borderTopLeftRadius:12,
		borderTopRightRadius:12
	},
	iconContainer: {
		flexDirection: 'row',
		borderRightColor: '#eaeaea',
		borderRightWidth: 1,
		height: 20,
		paddingRight: 10
	},
	iconContainerSecond: {
		flexDirection: 'row',
		borderRightColor: '#eaeaea',
		borderRightWidth: 1,
		height: 20,
		paddingHorizontal: 10
	},
	iconContainerThird: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		borderRightColor: '#eaeaea'
	},
	listingType: {
		flex: 1,
		fontSize: 14,
		fontWeight: '400',
		fontStyle: 'normal',
		lineHeight: 20,
		color: '#666666'
	},
	statusTextStyle: {
		marginLeft: 8,
		flex: 1
	},
	heartstatusTextStyle: {
		marginLeft: 20,
		paddingTop:1,
		flex: 1
	},
	buytab: {
		fontWeight: '500',
		fontFamily: 'DM Sans',
		fontSize: 12,
		lineHeight: 16,
		//color: color.buytab,
		marginLeft: 8,
		marginTop: 3,
		borderWidth: 1,
		borderRadius: 6,
		//borderColor: color.border,
		paddingTop: 1,
		paddingBottom: 1,
		paddingRight: 8,
		paddingLeft: 8
	},
	textStyle: {
		fontSize: 14,
		fontWeight: '400',
		lineHeight: 20,
		fontStyle: 'normal',
		fontFamily: 'DM Sans',
		color: '#666666'
	},
	saleMethodTab: { flexDirection: 'row' }
});
