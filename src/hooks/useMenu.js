import { useState } from 'react';
import { addCategory, addItemToCategory, deleteCategory, deleteItem, updateItem } from '../utils/firebase/firebase.utils';

const useMenu = (initialMenu, id) => {
  const [menu, setMenu] = useState(initialMenu);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editedItems, setEditedItems] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', price: '', imageFile: null });
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const handleAddItem = (categoryName) => {
    setShowAddForm(!showAddForm);
    setEditingCategory(categoryName);
  };

  const handleNewItemChange = (field, value) => {
    setNewItem(prev => ({ ...prev, [field]: value }));
  };

  const uploadImageToImgbb = async (imageUrl) => {
    const formData = new FormData();
    formData.append('image', imageUrl);
  
    try {
      const response = await fetch('https://api.imgbb.com/1/upload?key=b0e872ddcb3d654e2e501031004a9bbf', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data.data.url)
      return data.data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };
  

  const handleAddItemSubmit = async (e) => {
    e.preventDefault();
  
    let imageUrl = '';
    if (newItem.imageFile) {
      try {
        imageUrl = await uploadImageToImgbb(newItem.imageFile);
        if (!imageUrl) {
          console.error('Image upload failed');
          return;
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        return;
      }
    }
  
    const { imageFile, ...newItemWithoutFile } = newItem;
  
    const newItemWithId = {
      ...newItemWithoutFile,
      id: new Date().getTime().toString(),
      imageUrl: imageUrl, 
    };
  
    try {
      console.log('Adding item to category:', newItemWithId);
      await addItemToCategory(id, editingCategory, newItemWithId);
      
  
      setMenu(prevMenu => prevMenu.map(category =>
        category.category === editingCategory
          ? { ...category, items: [...category.items, newItemWithId] }
          : category
      ));
  
      setShowAddForm(false);
      setNewItem({ name: '', price: '', imageFile: null });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  
  

  const handleEdit = (categoryIndex) => {
    if (editingCategory === categoryIndex) {
      setEditingCategory(null);
      setEditedItems({});
    } else {
      setEditingCategory(categoryIndex);
    }
  };

  const handleSave = async (categoryIndex) => {
    const result = await updateItem(id, categoryIndex, editedItems, menu);
    if (result.success) {
      if (!result.noChanges) {
        setMenu(result.updatedMenu);
        console.log("Menu updated successfully");
      } else {
        console.log("No changes to save");
      }
      setEditingCategory(null);
      setEditedItems({});
    } else {
      console.error(result.message, result.error);
    }
  };

  const handleItemChange = (categoryIndex, itemIndex, field, value) => {
    setEditedItems(prev => ({
      ...prev,
      [itemIndex]: {
        ...prev[itemIndex],
        [field]: value
      }
    }));
  };

  const handleDeleteItem = async (id, categoryIndex, itemIndex) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteItem(id, categoryIndex, itemIndex);

        setMenu(prevMenu => prevMenu.map((category, cIndex) =>
          cIndex === categoryIndex
            ? { ...category, items: category.items.filter((_, iIndex) => iIndex !== itemIndex) }
            : category
        ));
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  const handleDeleteCategory = async (categoryIndex) => {
    if (window.confirm('Are you sure you want to delete this entire category? This action cannot be undone.')) {
      try {
        const updatedMenu = await deleteCategory(id, categoryIndex);
        setMenu(updatedMenu);
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const handleClickCategory = () => {
    setShowCategoryForm(true);
  };

  const handleFieldChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (categoryName.trim() === '') return;

    try {
      const updatedMenu = await addCategory(id, categoryName);
      setMenu(updatedMenu);
      setCategoryName('');
      setShowCategoryForm(false);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return {
    menu,
    setMenu,
    handleAddItem,
    handleNewItemChange,
    handleAddItemSubmit,
    handleEdit,
    handleSave,
    handleItemChange,
    handleDeleteItem,
    handleDeleteCategory,
    handleClickCategory,
    handleFieldChange,
    handleAddCategory,
    showAddForm,
    editingCategory,
    editedItems,
    newItem,
    showCategoryForm,
    categoryName
  };
};

export default useMenu;