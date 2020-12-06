import {ActionCreator} from 'redux';
import {getGlobal} from '../actions';

export function asyncGetGlobal (){
	return async (dispatch: ActionCreator<object>) => {
		const response = await fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json');
		const data = await response.json();
		dispatch(getGlobal(data))
	}
}
