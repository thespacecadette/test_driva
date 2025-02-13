import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const userSlice = createSlice({
	name: 'lenders',
	initialState,
	reducers: {
		setLenders: (state, action) => {
			console.log('state action', action.payload)
			state = {
				lenders: action.payload,
			};

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setLenders } = userSlice.actions;

export default userSlice.reducer;
