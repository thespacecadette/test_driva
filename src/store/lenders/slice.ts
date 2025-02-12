import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const userSlice = createSlice({
	name: 'lenders',
	initialState,
	reducers: {
		getLenders: (state, action) => {
			state = {
				lenders: action.payload.lenders,
			};

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { getLenders } = userSlice.actions;

export default userSlice.reducer;
