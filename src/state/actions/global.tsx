import {GLOBAL} from '../actionTypes';

export function getGlobal(payload: object) {
	return {
		type: GLOBAL,
		payload
	};
}
