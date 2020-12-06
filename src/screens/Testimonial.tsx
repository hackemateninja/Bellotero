import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import {connect} from 'react-redux';

function Home() {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const mapStateToProps = () => {

}
const mapDispatchToProps = () => {

}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
