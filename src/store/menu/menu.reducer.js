import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurants: [],
    selectedRestaurant: null, 
};

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurants: (state, action) => {
            state.restaurants = action.payload;
        },
        setSelectedRestaurant: (state, action) => {
            state.selectedRestaurant = action.payload;
        },
    },
});

export const { setRestaurants, setSelectedRestaurant } = restaurantSlice.actions;
export const restaurantReducer =  restaurantSlice.reducer;
