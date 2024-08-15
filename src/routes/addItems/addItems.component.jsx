import React, { useState } from 'react';
import { addItemToCategory } from '../../utils/firebase/firebase.utils';

const AddItemForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [restaurantId, setRestaurantId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newItem = {
      id: Date.now(), 
      name,
      price: parseFloat(price),
      restaurantId
    };

    await addItemToCategory(restaurantId, categoryName, newItem);

    
    setCategoryName('');
    setName('');
    setPrice('');
    setRestaurantId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category Name:</label>
        <input 
          type="text" 
          value={categoryName} 
          onChange={(e) => setCategoryName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Item Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Price:</label>
        <input 
          type="number" 
          step="0.01" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>RestaurantId:</label>
        <input 
          type="text" 
          value={restaurantId} 
          onChange={(e) => setRestaurantId(e.target.value)} 
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
