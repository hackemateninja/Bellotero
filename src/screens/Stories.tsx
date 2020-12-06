import React from 'react';
import {View} from 'react-native';
import {
	ScreenContainer,
	Title
} from '../components';
import {
	COLORS,
	STYLES
} from '../constants';

export default function Stories() {
	return (
		<ScreenContainer color={COLORS.iceBlue}>
			<View style={STYLES.screenContainer}>
				<Title title="Simple Stories page" />
			</View>
		</ScreenContainer>
	);
}
