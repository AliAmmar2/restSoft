import {combineReducers} from 'redux'
import { userReducer } from './user/user.reducer'
import { restaurantReducer } from './menu/menu.reducer'
import { cartReducer } from './cart/cart.reducer'


export const rootReducer = combineReducers({
    user: userReducer,
    restaurant: restaurantReducer,
    cart:cartReducer,
})

