import React from 'react';
import TopTabNavigator from './TopTab';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from '../components';

const Stack = createStackNavigator();

export default function StackNavigator(){

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					options={{header: ()=> <Header/>}}
					component={TopTabNavigator}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

