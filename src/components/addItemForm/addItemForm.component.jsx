import './addItemForm.styles.scss';

const AddItemForm = ({ showAddForm, editingCategory, category, handleAddItemSubmit, handleNewItemChange, newItem }) => {
  if (!showAddForm || editingCategory !== category) {
    return null;
  }

  return (
    <form onSubmit={handleAddItemSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => handleNewItemChange('name', e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={newItem.price}
        onChange={(e) => handleNewItemChange('price', e.target.value)}
        required
        step="0.01"
      />
      <input
        type="file"
        onChange={(e) => handleNewItemChange('imageFile', e.target.files[0])}
        required
  />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
