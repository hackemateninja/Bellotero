import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {ActionCreator} from 'redux';
import {asyncGetPage1} from '../state/thunks';
import {
	StyleSheet,
	View
} from 'react-native';
import {
	COLORS,
	STYLES
} from "../constants";
import {
	Button,
	Card,
	ScreenContainer,
	Title
} from '../components';


interface TestimonialPage {
	slider: object
	getData: any
}

function Testimonial({slider, getData}:TestimonialPage) {

	const [activeIndex, setActiveIndex] = React.useState(0);
	const [isLoad, setIsLoad] = React.useState(false);


	React.useEffect(()=>{
		getData();
		!slider ? setIsLoad(false) : setIsLoad(true);
	}, [slider])

	if (isLoad) {
		// @ts-ignore
		const {title, reviews} = slider

		const handleLast = () => {
			if (activeIndex === 0){
				setActiveIndex(0)
			}else {
				setActiveIndex(prevState => --prevState)
			}
		}

		const handleNext = () => {
			if (activeIndex <= reviews.length){
				setActiveIndex(reviews.length - 1)
			}else {
				setActiveIndex(prevState => ++prevState)
			}
		}

		return (
			<ScreenContainer color={COLORS.iceBlue}>
				<View style={STYLES.screenContainer}>
					<Title title={title}/>
					<View style={styles.pager}>
						<Card
							key={reviews[activeIndex].name}
							name={reviews[activeIndex].name}
							position={reviews[activeIndex].position}
							comment={reviews[activeIndex].comment}
						/>
						<View style={styles.counter}>
							<Button title="Last" onPress={handleLast} />
							<View style={styles.counterNumber}>
								<Title
									type="counter"
									title={ `${activeIndex + 1} / ${reviews.length}` }
								/>
							</View>
							<Button title="Next" onPress={handleNext}/>
						</View>
					</View>
				</View>
			</ScreenContainer>
		);
	}else {
		return null;
	}
}

const styles = StyleSheet.create({
	counter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '100%'
	},
	counterNumber:{
		width: 75,
		marginBottom: 25
	},
	pager:{
		alignSelf: "center",
		marginTop: 75,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});


const mapStateToProps = (state: object) => {
	// @ts-ignore
	return state.page1.page1;
}
const mapDispatchToProps = (dispatch: ActionCreator<object>) => ({
	getData: () => dispatch(asyncGetPage1())
})
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
