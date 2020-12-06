import {GLOBAL} from '../actionTypes';

const initialState = {
	global: {},
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case GLOBAL:
			return {
				...state,
				global: {...action.payload},
			};
		default:
			return state;
	}
};
