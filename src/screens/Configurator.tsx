import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {ActionCreator} from 'redux';
import {asyncGetPage2} from '../state/thunks';
import {
	CustomSlider, Result,
	ScreenContainer,
	Title
} from '../components';
import {
	COLORS,
	FONTS,
	STYLES
} from '../constants';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

interface Configurator {
	calculator: object;
	getData: ActionCreator<object>;
}

function Configurator({calculator, getData}:Configurator) {

	const [isLoad, setIsLoad] = React.useState(false);
	const [monthly, setMonthly] = React.useState(0);
	const [fullTime, setFullTime] = React.useState(0);
	const [food, setFood] = React.useState(0);
	const [yearly, setYearly] = React.useState(0);

	React.useEffect(()=>{
		getData();
		!calculator ? setIsLoad(false) : setIsLoad(true);
	}, [calculator])

	React.useEffect(()=>{
		setFood(monthly * 0.3)
		setYearly(fullTime * 1337 + food)
	}, [monthly, fullTime])

	if (isLoad) {
		return (
			<ScreenContainer color={COLORS.iceBlue}>
				<View style={STYLES.screenContainer}>
					<Title title={calculator.title}/>
					<Text style={styles.description}>
						{calculator.description}
					</Text>
					<View style={STYLES.rowBetweenCenter}>
						<Result
							value={food.toFixed(2)}
							description="Estimated cost food savings"
						/>
						<Result
							value={yearly.toFixed(2)}
							description="Your estimated annual savings"
						/>
					</View>
					<View style={STYLES.rowBetweenCenter}>
						<CustomSlider
							description="Monthly ingredient spending"
							onValueChange={(val) => setMonthly(val.toFixed(2))}
							value={monthly}
							maxValue={100}
							minValue={0}
						/>
						<CustomSlider
							description="Full-time employees that process invoices"
							onValueChange={(val) => setFullTime(parseInt(val))}
							value={fullTime}
							maxValue={10}
							minValue={0}
						/>
					</View>
				</View>
			</ScreenContainer>
		);
	}else {
		return null
	}
}

const styles = StyleSheet.create({
	description: {
		fontFamily: FONTS.primary,
		fontSize: 16,
		lineHeight: 24,
		marginVertical: 30
	},
});
const mapStateToProps = (state: object) => {
	return state.page2.page2;
}
const mapDispatchToProps = (dispatch: ActionCreator<object>) => ({
	getData: ()=> dispatch(asyncGetPage2())
})
export default connect(mapStateToProps, mapDispatchToProps)(Configurator)
