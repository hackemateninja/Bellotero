import React from 'react';
import {
	COLORS,
	FONTS
} from '../constants';
import {
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

interface Button {title:string; onPress: any}

export default function Button({title, onPress}: Button) {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}>
			<Text style={styles.buttonTitle}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.cobaltBlue,
		width: 75,
		padding: 8,
		height: 50
	},
	buttonTitle:{
		fontFamily: FONTS.secondary,
		color: COLORS.white,
		fontSize: 24,
		textAlign: 'center'
	}
});
