import {ActionCreator} from 'redux';
import {getPage2} from '../actions';

export function asyncGetPage2 (){
	return async (dispatch: ActionCreator<object>) => {
		const response = await fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json');
		const data = await response.json();
		dispatch(getPage2(data));
	}
}
