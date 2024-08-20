import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.reducer';

import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <div className='checkout-item-container'>
    <div className='item-details'>
        <span className='item-name'>{name}</span>
    </div>
    <div className='quantity-price'>
        <div className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>➖</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addItemHandler}>➕</div>
        </div>
        <span className='price'>{price}$</span>
        <div className='edit-icon' onClick={clearItemHandler}>x</div>
    </div>
</div>

  );
};

export default CheckoutItem;
