import React from 'react';
import {loadAsync} from 'expo-font';

export default function useLoadFonts(): boolean{
	const [isLoaded, setIsLoaded] = React.useState(false);

	const loading = async () => {
		await loadAsync({
			'roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
			'roboto-medium': require('../../assets/fonts/Roboto-Medium.ttf'),
			'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
			'cormorant-garamond': require('../../assets/fonts/CormorantGaramond.ttf')
		});
	}

	React.useEffect(() => {
		loading().then(()=>{
			setIsLoaded(true)
		}).catch(() => {
			setIsLoaded(false)
		})
	}, [])

	return isLoaded;
}
