import './catAdmin.styles.scss'

const CatAdmin = ({
    admin,
    categoryIndex,
    category,
    editingCategory,
    handleSave,
    handleEdit,
    handleAddItem,
    handleDeleteCategory
  }) => {
    
  
    return (
      admin && (
        <div className="cat-admin-buttons">
          <button 
            className="edit-category-button"
            onClick={() => editingCategory === categoryIndex ? handleSave(categoryIndex) : handleEdit(categoryIndex)}
          >
            {editingCategory === categoryIndex ? 'Save' : 'Edit'}
          </button>
          <button 
            className="add-item-button"
            onClick={() => handleAddItem(category.category)}
          >
            Add Item
          </button>
          <button 
            className="delete-item-button"
            onClick={() => handleDeleteCategory(categoryIndex)}
          >
            Delete Category
          </button>
        </div>
      )
    );
  }
  
  export default CatAdmin;
  