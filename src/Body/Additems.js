import React, { useState } from 'react';
import './Additems.css';
import apiResponse from './apiResponse';

function Additems({ API_URL, list, setList, erro, setErro }) {
  const [newItem, setNewItem] = useState('');

  async function handleInput() {
    if (!list.some((li) => String(li.title).toLowerCase() === String(newItem).toLowerCase())) {
      const updatedItem = {
        id: (list.length !== 0)?list[list.length-1].id+ 1:1,
        title: newItem,
        checked: true,
      };
     
      setList([...list, updatedItem]);

      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      };

      const result = await apiResponse(API_URL, postOptions);
      setErro(result);
    } else {
      alert('Item Already Exists');
    }
  }

  return (
    <div className='Additems'>
      <input
        id='newitem'
        className='ItemInput'
        placeholder='Enter the Item Name...'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className='SubmitButton' type='submit' onClick={handleInput}>
        +
      </button>
      
    </div>
  );
}

export default Additems;
