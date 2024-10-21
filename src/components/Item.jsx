import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Youtube } from '../Youtube';

const Item = ({ tunde }) => {
  const { deleteReview, editReview } = useContext(Youtube);
  
  // State for editing
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(tunde.title);
  const [updatedBody, setUpdatedBody] = useState(tunde.body);

  const handleEdit = () => {
    const updatedReview = {
      title: updatedTitle,
      body: updatedBody,
      userId: tunde.userId, // Assuming you have this data
    };

    editReview(tunde.id, updatedReview);
    setIsEditing(false); // Hide the edit form after submission
  };

  return (
    <div className='w-[230px] h-[300px]'>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className='w-full p-1 mb-2 border'
          />
          <textarea
            value={updatedBody}
            onChange={(e) => setUpdatedBody(e.target.value)}
            className='w-full p-1 mb-2 border'
          />
          <button className='p-1 text-white bg-green-500' onClick={handleEdit}>
            Save
          </button>
          <button className='p-1 text-white bg-red-500' onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h1 className='text-2xl font-bold'>{tunde.title}</h1>
          <p>{tunde.body}</p>
          <button className='p-1 text-white bg-gray-500' onClick={() => deleteReview(tunde.id)}>Delete</button>
          <button className='p-1 text-white bg-gray-500' onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Item;
