import React from 'react';
import {
	COLORS,
	STYLES,
	FONTS
} from '../constants';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';


interface Card {
	name: string;
	position: string;
	comment: string
}

export default function Card({name, position, comment}: Card) {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.cardLeft}>
				<Text style={styles.cardName}>{name}</Text>
				<Text style={styles.cardPosition}>{position}</Text>
			</View>
			<View style={styles.cardRight}>
				<Text style={styles.cardComment}>
					{comment}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardComment: {
		fontFamily: FONTS.primaryBold,
		fontSize: 18,
		lineHeight: 26
	},
	cardContainer: {
		backgroundColor: COLORS.white,
		padding: 16,
		...STYLES.rowAroundCenter
	},
	cardLeft: {
		height: '100%',
		width: '28%',
		...STYLES.columnStart
	},
	cardName: {
		fontFamily: FONTS.primaryBold,
		fontSize: 22,
		marginBottom: 10
	},
	cardPosition:{
		color: COLORS.grey,
		fontFamily: FONTS.primary,
		fontSize: 12
	},
	cardRight: {
		width: '70%'
	},
});
