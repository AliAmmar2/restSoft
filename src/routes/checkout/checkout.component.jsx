import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <span>Your Order</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>Subtotal</span>
        <span> {cartTotal}$</span>
      </div>
    </div>
  );
};

export default Checkout;
