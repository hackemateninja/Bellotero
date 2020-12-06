import React from 'react';
import {useCheckAndroid} from '../hooks';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';
import {
	COLORS,
	IMAGES,
	STYLES
} from '../constants';


export default function Header() {
	return (
		<View style={styles.header}>
			<Image
				source={IMAGES.LOGO}
				style={
					{
						...STYLES.logo,
					}
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		backgroundColor: COLORS.white,
	}
});

