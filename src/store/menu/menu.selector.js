export const selectRestaurants = state => state.restaurant.restaurants;
export const selectSelectedRestaurant = state => state.restaurant.selectedRestaurant;
export const selectIsLoading = state => state.restaurant.isLoading;
export const selectError = state => state.restaurant.error;
export const selectMenuByRestId = (state, restId) => state.menu.menus[restId];

