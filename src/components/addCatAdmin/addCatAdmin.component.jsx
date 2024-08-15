import './addCatAdmin.styles.scss'

const AddCatAdmin = ({ admin, categoryName, handleClickCategory, showCategoryForm, handleAddCategory, handleFieldChange }) => {
    return (
      admin && (
        <>
          <button className="add-category-button" onClick={handleClickCategory}>
            Add Category
          </button>
          {showCategoryForm && (
            <form onSubmit={handleAddCategory} className="add-category-form">
              <input
                type="text"
                placeholder="Category Name"
                value={categoryName}
                onChange={handleFieldChange}
                required
              />
              <button type='submit'>Add</button>
            </form>
          )}
        </>
      )
    );
  }
  
  export default AddCatAdmin;
  