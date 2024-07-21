import { StyleSheet } from 'react-native';
import { color } from '../Color';

const LoaderStyles = StyleSheet.create({
	container: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: color.screenBackgroundMore,
		backgroundColor: color.loaderTransperant,
		alignSelf: 'center',
		borderRadius: 6,
		/* width: windowWidth,
		height: windowHeight, */
		opacity: 1,
		zIndex: 500,
		...StyleSheet.absoluteFill
	},
	dotsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 85,
		backgroundColor: color.greyWhiteColor,
		height: 40,
		borderRadius: 10
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: color.iconColor,
		marginHorizontal: 4
	},
	focusedDot: {
		backgroundColor: color.darkColor
	}
});
export default LoaderStyles;
