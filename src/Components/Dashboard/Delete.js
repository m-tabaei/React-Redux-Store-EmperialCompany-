import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Delete() {
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const DeleteAll = async () => {
    try {
      const request = await fetch('http://localhost:3030/posts', {
        method: 'DELETE',
      });
      const res = await request.json();
      console.log(res);
    } catch (error) {

    }
  };
  const deletePost = async (id) => {
    try {
      const response = await fetch(`https://api-storeg-emperial.vercel.app/products/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {

      } else {

      }
      navigate('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = () => {
    if (id.trim() === '') {
      return;
    }

    deletePost(id);
  };

  return (
    <div className="container mx-auto mt-3">
      <div className="row">
        <div className="col-6 offset-3  p-3 text-white rounded-4 " style={{ backgroundColor: '#c7ccd0' }}>
          <div className="delete d-block mb-2">
            <label htmlFor="ID">ID</label>
            <input
              type="text"
              placeholder="ID"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="d-block mb-2">
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
            <button onClick={DeleteAll} className="deleteButton btn btn-danger mx-2 ">
              Delete All Post
            </button>
            <button onClick={() => navigate('/dashboard')} className="btn btn-info text-capitalize  mx-2">comeBack</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
