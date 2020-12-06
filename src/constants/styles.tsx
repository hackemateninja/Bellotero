import {StyleSheet} from 'react-native';
import fonts from "./fonts";


export default StyleSheet.create({
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	columnBetweenCenter: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	columnStart:{
		justifyContent: 'flex-start',
	},
	logo: {
		alignSelf: 'center',
		height: 50,
		width: 150,
		resizeMode:'contain'
	},
	rowAroundCenter: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignSelf: 'center',
	},
	rowBetweenCenter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	rowBetweenEnd: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	rowStartCenter: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'center',
	},
	screen:{
		flex: 1,
		padding:0,
		elevation: 0
	},
	screenContainer:{
		paddingHorizontal: 24,
		width: '100%'
	},
	superSmallText:{
		fontFamily: fonts.primaryMedium,
		fontSize: 9
	},
});
