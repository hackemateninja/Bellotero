import React from 'react';
import {
	StyleSheet, Text,
	View
} from 'react-native';
import {
	COLORS,
	FONTS,
	STYLES
} from '../constants';

interface  Result {
	value: string;
	description: string;
}

export default function Result({value, description}: Result) {
	return (
		<View style={styles.resultContainer}>
			<View style={STYLES.rowBetweenCenter}>
				<Text style={styles.valueSign}>
					$
				</Text>
				<Text style={styles.value}>
					{value}
				</Text>
			</View>
			<Text style={styles.description}>
				{description}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	description: {
		color: COLORS.black,
		fontFamily: FONTS.primaryBold,
		fontSize: 14,
		textAlign: 'center'
	},
	resultContainer: {
		width: '45%',
		...STYLES.columnBetweenCenter
	},
	value: {
		color: COLORS.cobaltBlue,
		fontFamily: FONTS.primaryBold,
		fontSize: 30,
		lineHeight: 72,
		textAlign: 'center',
	},
	valueSign: {
		color: COLORS.cobaltBlue,
		fontFamily: FONTS.primaryBold,
		fontSize: 20,
		lineHeight: 40,
		marginRight: 5,
		textAlign: 'center',
	}
});
