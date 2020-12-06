import React from 'react';
import {useCheckAndroid} from '../hooks';
import {STYLES} from '../constants';
import {
	Keyboard,
	KeyboardAvoidingView,
	SafeAreaView,
	StatusBar,
	TouchableWithoutFeedback,
	View
} from 'react-native';

interface GradientContainerType {
	children: React.ReactNode;
	color: string;
}

export default function ScreenContainer({children, color}: GradientContainerType) {

	const behavior = useCheckAndroid() ? 'height' : 'padding';

	const styleSafeArea = {
		backgroundColor: color,
		...STYLES.screen,
	};
	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={color}
				animated={true}
			/>
			<SafeAreaView style={styleSafeArea}>
				<KeyboardAvoidingView behavior={behavior} style={STYLES.screen}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View
							style={STYLES.screen}>
							{children}
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</>
	);
}
