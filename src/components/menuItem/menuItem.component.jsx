import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.reducer';
import DeleteButton from '../DeleteItem/DeleteButton.component';
import './menuItem.styles.scss';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { useState } from 'react';

const MenuItem = ({
  item,
  itemIndex,
  categoryIndex,
  editingCategory,
  editedItems,
  handleItemChange,
  handleDeleteItem,
  admin,
  id,
}) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  
  const addProductToCart = () => {
    setClicked(!clicked);
    if(!clicked){
    dispatch(addItemToCart(item));
    }else{
      dispatch(removeItemFromCart(item));
    }
    
  };
  return (
    <div className="menu-item"> 
      {editingCategory === categoryIndex ? (
        <div className="edit-item-form">
          <input
            value={editedItems[itemIndex]?.name ?? item.name}
            onChange={(e) => handleItemChange(categoryIndex, itemIndex, 'name', e.target.value)}
          />
          <input
            value={editedItems[itemIndex]?.price ?? item.price}
            onChange={(e) => handleItemChange(categoryIndex, itemIndex, 'price', e.target.value)}
            type="number"
            step="0.01"
          />
        </div>
      ) : (
        <div className="menu-content-container">
          <div className={`${clicked ? 'clicked-item' : ''}  menu-item-content`} onClick={addProductToCart}>
          <img className='item-img' src={item.imageUrl} alt=''/>
          <h4 className="item-name">{item.name}</h4>
          <h4 className="item-price">${item.price}</h4>
          </div>
          <DeleteButton 
            admin={admin}
            handleDeleteItem={handleDeleteItem}
            id={id}
            categoryIndex={categoryIndex}
            itemIndex={itemIndex}
          />
        </div>
      )}
    </div>
  );
};

export default MenuItem;
