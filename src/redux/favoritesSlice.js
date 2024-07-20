import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('favorites');
		if (serializedState === null) {
			return [];
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return [];
	}
};

const saveFavoritesToLocalStorage = favorites => {
	try {
		const serializedState = JSON.stringify(favorites);
		localStorage.setItem('favorites', serializedState);
	} catch (err) {
		console.error('Could not save favorites', err);
	}
};

const initialState = loadFavoritesFromLocalStorage();

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.push(action.payload);
			saveFavoritesToLocalStorage(state);
		},
		removeFavorite: (state, action) => {
			const newState = state.filter(item => item._id !== action.payload._id);
			saveFavoritesToLocalStorage(newState);
			return newState;
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
