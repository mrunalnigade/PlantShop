import { createAsyncThunk } from '@reduxjs/toolkit';
import { PropertyDetails } from './StorageInterface';

export const fetchPorpertyInfo = createAsyncThunk(
    'PropertyDetails/fetchPorpertyInfo',
    async () => {
        try {
            const response = await fetch('http://13.60.96.225:5000/admin/product/products');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('the data is', data)
            return data as PropertyDetails;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Ensure the error is re-thrown to be handled in the Redux slice
        }
    }
);
