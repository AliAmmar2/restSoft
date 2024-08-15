import React from 'react';
import CatAdmin from '../catAdmin/catAdmin.component';

const CategoryHeader = ({ category, categoryIndex, admin, editingCategory, handleSave, handleEdit, handleAddItem, handleDeleteCategory }) => (
  <div className="category-header">
    <h2>{category.category}</h2>
    <CatAdmin
      admin={admin}
      categoryIndex={categoryIndex}
      category={category}
      editingCategory={editingCategory}
      handleSave={handleSave}
      handleEdit={handleEdit}
      handleAddItem={handleAddItem}
      handleDeleteCategory={handleDeleteCategory}
    />
  </div>
);

export default CategoryHeader;