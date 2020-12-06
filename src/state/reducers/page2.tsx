import {PAGE_2} from '../actionTypes';

const initialState = {
	page2: {},
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case PAGE_2:
			return {
				...state,
				page2: {...action.payload},
			};
		default:
			return state;
	}
};
