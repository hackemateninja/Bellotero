import React from 'react';
import {
	COLORS,
	FONTS
} from '../constants';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';


interface Title {title:string, type?: string}

export default function Title({title, type} : Title ) {

	const typeStyle = type === 'counter' ? styles.titleCustom: styles.title

	return (
		<View style={styles.titleContainer}>
			<Text style={typeStyle}>
				{title}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title:{
		color: COLORS.white,
		fontFamily: FONTS.primaryBold,
		fontSize: 30,
		lineHeight: 40,
		textAlign: 'center'
	},
	titleCustom: {
		color: COLORS.white,
		fontFamily: FONTS.secondary,
		fontSize: 30,
		lineHeight: 32,
		textAlign: 'center'
	},
	titleContainer: {
		backgroundColor: COLORS.cobaltBlue,
		marginTop: 25,
		paddingVertical: 8,
		paddingHorizontal: 4
	},
});
