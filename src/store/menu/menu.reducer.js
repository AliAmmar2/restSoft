import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRestaurantsByUsername } from '../../utils/firebase/firebase.utils';

export const fetchRestaurantMenu = createAsyncThunk(
  'restaurant/fetchMenu',
  async (restName) => {
    const menu = await getRestaurantsByUsername(restName);
    return menu;
  }
);

export const setMenu = (state, action) => {
  const { restId, menu } = action.payload;
  state.menus[restId] = {
    data: menu,
    timestamp: Date.now()
  };
};

const initialState = {
  restaurants: [],
  selectedRestaurant: null,
  isLoading: false,
  error: null,
  menus: {}, // { restId: { data: menuData, timestamp: number } }
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRestaurantMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedRestaurant = action.payload;
      })
      .addCase(fetchRestaurantMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setRestaurants } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
