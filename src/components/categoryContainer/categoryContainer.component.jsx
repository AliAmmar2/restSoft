import React from 'react';
import ItemContainer from '../itemContainer/itemContainer.component';
import CategoryHeader from '../categoryHeader/categoryHeader.component';

const CategoryContainer = ({ category, categoryIndex, admin, editingCategory, editedItems, handleItemChange, handleDeleteItem, id, showAddForm, handleAddItemSubmit, handleNewItemChange, newItem, handleSave, handleEdit, handleAddItem, handleDeleteCategory }) => (
  <div id={category.category} key={categoryIndex} className='category-container'>
    <CategoryHeader
      category={category}
      categoryIndex={categoryIndex}
      admin={admin}
      editingCategory={editingCategory}
      handleSave={handleSave}
      handleEdit={handleEdit}
      handleAddItem={handleAddItem}
      handleDeleteCategory={handleDeleteCategory}
    />
    <ItemContainer
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
    />
  </div>
);

export default CategoryContainer;