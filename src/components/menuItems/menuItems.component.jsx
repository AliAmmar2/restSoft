import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenu } from '../../store/menu/menu.reducer';
import './menuItems.styles.scss';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';
import { getUserDocumentByUID } from '../../utils/firebase/firebase.utils';
import CategoryBar from '../categoryBar/categoryBar.component';
import AddCatAdmin from '../addCatAdmin/addCatAdmin.component';
import useMenu from '../../hooks/useMenu';
import CategoryContainer from '../categoryContainer/categoryContainer.component';
import { selectCartCount, selectCartItems, } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import CheckoutItem from '../checkoutItem/checkoutItem.component';
import Checkout from '../../routes/checkout/checkout.component';

const MenuItems = ({ name, id, initialMenu, location, isAdmin }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [restName, setRestName] = useState(null);
  const { menu, handleAddItem, handleNewItemChange, handleAddItemSubmit, handleEdit, handleSave, handleItemChange, handleDeleteItem, handleDeleteCategory, handleClickCategory, handleFieldChange, handleAddCategory, showAddForm, editingCategory, editedItems, newItem, showCategoryForm, categoryName } = useMenu(initialMenu, id);

  const cartItems = useSelector(selectCartItems);
  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser) {
        const { Username } = await getUserDocumentByUID(currentUser.uid);
        setRestName(Username);
      }
    };
    fetchUser();
  }, [currentUser]);

  const admin = currentUser && isAdmin && restName === id;

  useEffect(() => {
    // Update Redux store when menu changes
    dispatch(setMenu({ restId: id, menu }));
  }, [menu, id, dispatch]);

  return (
    <>
      <h1>{name}'s Menu</h1>
      <div className="category-nav">
        <CategoryBar menu={menu} />
      </div>
      <div>
        {menu.map((category, categoryIndex) => (
          <CategoryContainer
            key={categoryIndex}
            category={category}
            categoryIndex={categoryIndex}
            admin={admin}
            editingCategory={editingCategory}
            editedItems={editedItems}
            handleItemChange={handleItemChange}
            handleDeleteItem={handleDeleteItem}
            id={id}
            showAddForm={showAddForm}
            handleAddItemSubmit={handleAddItemSubmit}
            handleNewItemChange={handleNewItemChange}
            newItem={newItem}
            handleSave={handleSave}
            handleEdit={handleEdit}
            handleAddItem={handleAddItem}
            handleDeleteCategory={handleDeleteCategory}
          />
        ))}
        <AddCatAdmin
          admin={admin}
          categoryName={categoryName}
          handleClickCategory={handleClickCategory}
          showCategoryForm={showCategoryForm}
          handleAddCategory={handleAddCategory}
          handleFieldChange={handleFieldChange}
        />
        {cartItems.length && !admin ? <Checkout/> : null}
       
      </div>
    </>
  );
};

export default MenuItems;