import { useSelector } from 'react-redux';
import './menuItems.styles.scss';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';
import { getUserDocumentByUID } from '../../utils/firebase/firebase.utils';
import CategoryBar from '../categoryBar/categoryBar.component';
import AddCatAdmin from '../addCatAdmin/addCatAdmin.component';
import useMenu from '../../hooks/useMenu';
import locationLogo from '../../assets/location.png'
import CategoryContainer from '../categoryContainer/categoryContainer.component';
import { selectCartCount, selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

const MenuItems = ({ name, id, initialMenu,location, isAdmin }) => {
  const currentUser = useSelector(selectCurrentUser);
  const [restName, setRestName] = useState(null);
  const { menu, handleAddItem, handleNewItemChange, handleAddItemSubmit, handleEdit, handleSave, handleItemChange, handleDeleteItem, handleDeleteCategory, handleClickCategory, handleFieldChange, handleAddCategory, showAddForm, editingCategory, editedItems, newItem, showCategoryForm, categoryName } = useMenu(initialMenu, id);

  const navigate = useNavigate();
  const count = useSelector(selectCartCount);
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
        <div className='location'>
        <img className='location-logo' src={locationLogo} alt='location logo'/>
        <p >{location} </p>
        </div>
        {count && !isAdmin ? <button onClick={() => navigate('/checkout')}>Go to Checkout</button> : null}
      </div>
    </>
  );
};

export default MenuItems;