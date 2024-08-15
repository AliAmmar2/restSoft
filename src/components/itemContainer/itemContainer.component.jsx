import React from 'react';
import MenuItem from '../menuItem/menuItem.component';
import AddItemForm from '../addItemForm/addItemForm.component';

const ItemContainer = ({ category, categoryIndex, admin, editingCategory, editedItems, handleItemChange, handleDeleteItem, id, showAddForm, handleAddItemSubmit, handleNewItemChange, newItem }) => (
  <div>
    {category.items.map((item, itemIndex) => (
      <MenuItem
        key={itemIndex}
        item={item}
        itemIndex={itemIndex}
        categoryIndex={categoryIndex}
        editingCategory={editingCategory}
        editedItems={editedItems}
        handleItemChange={handleItemChange}
        handleDeleteItem={handleDeleteItem}
        admin={admin}
        id={id}
      />
    ))}
    <AddItemForm
      showAddForm={showAddForm}
      editingCategory={editingCategory}
      category={category.category}
      handleAddItemSubmit={handleAddItemSubmit}
      handleNewItemChange={handleNewItemChange}
      newItem={newItem}
    />
  </div>
);

export default ItemContainer;