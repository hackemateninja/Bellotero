import {PAGE_1} from '../actionTypes';

const initialState = {
	page1: {},
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case PAGE_1:
			return {
				...state,
				page1: {...action.payload},
			};
		default:
			return state;
	}
};
