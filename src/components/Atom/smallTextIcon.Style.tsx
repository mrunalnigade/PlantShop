import { StyleSheet } from 'react-native';

const SmallTextIconStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRightColor: '#eaeaea',
		paddingRight: 7,
		// marginTop: 1
	},

	containerSecond: {
		flexDirection: 'row',
		paddingHorizontal: 8,
		borderLeftColor: '#eaeaea',
		borderLeftWidth: 1
	},
	containerThird: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		borderLeftColor: '#eaeaea',
		borderLeftWidth: 1
	},
	iconContainer: {
		paddingRight: 2,
		paddingTop: 3
	},
	textContainer: {
		fontSize: 14,
		lineHeight: 20,
		color: '#666666'
	},
	iconTextStyle: {
		fontSize: 14,
		fontStyle: 'normal',
		lineHeight: 20
	},
	revtextContainer: {
		borderLeftWidth: 1,
		borderLeftColor: '#eaeaea',
		paddingLeft: 8
	},
	statusTextStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 8,
		marginTop: 4,
		marginRight: 8
	}
});
export default SmallTextIconStyles;
