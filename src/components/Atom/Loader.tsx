import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import LoaderStyles from './Loader.Styles';

const Loader = () => {
	const [focusedDot, setFocusedDot] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setFocusedDot((prevDot) => (prevDot + 1) % 3);
		}, 200);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<View testID="Loadermaincomponent" style={LoaderStyles.container}>
			<View
				testID="Loaderdotcontainer"
				style={LoaderStyles.dotsContainer}
			>
				{[0, 1, 2].map((index) => (
					<View
						testID="loaderDot"
						key={index}
						style={[
							LoaderStyles.dot,
							index === focusedDot
								? LoaderStyles.focusedDot
								: null
						]}
					/>
				))}
			</View>
		</View>
	);
};

export default Loader;
