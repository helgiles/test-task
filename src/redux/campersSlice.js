import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const initialState = {
	items: [],
	loading: false,
	error: false,
};

const campersSlice = createSlice({
	name: 'campers',
	initialState: initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchCampers.pending, state => {
				state.error = false;
				state.loading = true;
			})
			.addCase(fetchCampers.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchCampers.rejected, state => {
				state.loading = false;
				state.error = true;

				console.log(state);
			}),
});

export const campersReducer = campersSlice.reducer;
