import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6698be392069c438cd6fc3d2.mockapi.io/';

export const fetchContacts = createAsyncThunk(
	'adverts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/adverts');

			console.log(response.data);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
