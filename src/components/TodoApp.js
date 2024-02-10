import React, { useState } from 'react';

const TodoApp = () => {
  // State to manage the list of items
  const [items, setItems] = useState([]);
  // State to manage the input value for adding a new item
  const [newItem, setNewItem] = useState('');

  // Function to handle adding a new item to the list
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Function to handle updating an item in the list
  const updateItem = (index, updatedValue) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedValue;
    setItems(updatedItems);
  };

  // Function to handle deleting an item from the list
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>React CRUD Example</h1>

      {/* Add new item section */}
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Display items section */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => updateItem(index, prompt('Update item:', item))}>
              Update
            </button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
