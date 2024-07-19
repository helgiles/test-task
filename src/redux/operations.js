import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6698be392069c438cd6fc3d2.mockapi.io';

export const fetchCampers = createAsyncThunk(
	'campers/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/adverts');
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
