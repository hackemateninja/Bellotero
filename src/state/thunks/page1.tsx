import {ActionCreator} from 'redux';
import {getPage1} from '../actions';

export function asyncGetPage1 (){
	return async (dispatch: ActionCreator<object>) => {
		const response = await fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json');
		const data = await response.json();
		dispatch(getPage1(data));
	}
}
