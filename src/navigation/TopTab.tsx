import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {ActionCreator} from 'redux';
import {asyncGetGlobal} from '../state/thunks';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
	COLORS,
	STYLES
} from '../constants';
import {
	About,
	Configurator,
	Stories,
	Testimonial
} from '../screens';


const Tab = createMaterialTopTabNavigator();

interface TopTabNavigator {
	menu: object;
	getData: ActionCreator<object>;
}

function TopTabNavigator({menu, getData}:TopTabNavigator) {

	const [isLoad, setIsLoad] = React.useState(false);

	React.useEffect(()=>{
		getData();
		!menu ? setIsLoad(false) : setIsLoad(true);
	}, [menu])

	const correctScreen = (name: string)=>{
		switch (name){
			case 'Testimonial':
				return (
					Testimonial
				);
			case 'Configurator':
				return (
					Configurator
			);
			case 'About':
				return (
					About
				);
			case 'Stories':
				return (
					Stories
				)
			default:
				return (
					Testimonial
				)
		}
	}

	const tabBarOptions = {
		allowFontScaling: true,
		elevation: 0,
		indicatorStyle: {
			backgroundColor: COLORS.cobaltBlue
		},
		labelStyle: {
			color: COLORS.cobaltBlue,
			...STYLES.superSmallText
		}
	}

	if (isLoad){
		return(
			<Tab.Navigator
				tabBarOptions={tabBarOptions}>
				{
					// @ts-ignore
					menu.items.map((i: any) => (
						<Tab.Screen key={i.text} name={i.text} component={correctScreen(i.text)} />
					))
				}
			</Tab.Navigator>
		)
	}else {
		return null
	}
}

const mapStateToProps = (state: object) => {
	// @ts-ignore
	return state.global.global
};
const mapDispatchToProps = (dispatch: ActionCreator<object>) => ({
	getData: () => dispatch(asyncGetGlobal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTabNavigator);
