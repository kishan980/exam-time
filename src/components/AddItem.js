import React, { useState } from 'react';
import ItemList from './ItemList';


// 
const AddItem = () => {
    const [items, setItems] = useState(['Apple', 'Banana']);
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    return (
        <div>
            <input
                type="text"
                className="form-control mb-2"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter item"
            />
            <button className="btn btn-primary mb-3" onClick={handleAdd}>
                Add Item
            </button>
            <ItemList items={items} />
        </div>
    );
};

export default AddItem;
