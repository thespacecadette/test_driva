import initialState from './lenders/initialState';

interface Action {
	type: string;
	payload: any;
}

export default function appReducer(state = initialState, action: Action) {
	switch (action.type) {
		case 'setLenders': {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
}
