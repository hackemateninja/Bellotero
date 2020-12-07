import React from 'react';
import Slider from '@react-native-community/slider';
import {
	COLORS,
	FONTS, STYLES
} from '../constants';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

interface CustomSlider {
	value: number;
	onValueChange: any;
	minValue: number;
	maxValue: number;
	description: string;
	sign?: string;
	step?: number
}

export default function CustomSlider ({
		value,
		description,
		onValueChange,
		minValue,
		maxValue,
		sign,
		step
	}: CustomSlider) {

	return (
		<View style={styles.sliderContainer}>
			<View style={styles.valueContainer}>
				<Text style={styles.valueSign}>
					{sign || ''}
				</Text>
				<Text style={styles.value}>
					{value}
				</Text>
			</View>
			<Text style={styles.description}>
				{description}
			</Text>
			<Slider
				style={styles.slider}
				minimumValue={minValue}
				maximumValue={maxValue}
				minimumTrackTintColor={COLORS.cobaltBlue}
				maximumTrackTintColor={COLORS.grey}
				thumbTintColor={COLORS.cobaltBlue}
				value={value}
				onValueChange={onValueChange}
				step={step || 0}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	description:{
		fontFamily: FONTS.primaryBold,
		fontSize: 14,
		textAlign: 'center'
	},
	sliderContainer: {
		marginHorizontal: 10,
		marginVertical: 30,
		width: '40%',
		...STYLES.columnBetweenCenter
	},
	slider:{
		height: 40,
		width: '100%',
	},
	value:{
		color: COLORS.black,
		fontFamily: FONTS.primaryMedium,
		fontSize: 30,
		lineHeight: 40
	},
	valueContainer:{
		backgroundColor: COLORS.white,
		borderColor: COLORS.grey,
		borderWidth: 1,
		marginBottom: 20,
		padding: 10,
		width: '100%',
		...STYLES.rowBetweenCenter
	},
	valueSign: {
		color: COLORS.grey,
		fontFamily: FONTS.primaryMedium,
		fontSize: 20,
	},
});
