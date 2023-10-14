import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Delete() {
  const [title, setTitle] = useState('');
  const [idToDelete, setIdToDelete] = useState(null);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const DeleteAll = async () => {
    try {
      const request = await fetch('https://api-storeg-emperial.vercel.app/products', {
        method: 'DELETE',
      });
      const res = await request.json();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFindId = async () => {
    try {
      const response = await fetch(`https://api-storeg-emperial.vercel.app/products?title=${title}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          const foundId = data[0].id;
          setIdToDelete(foundId);
          if (data[0].image) {
            setPost(data[0]);
          }
        } else {
          toast.error('Title not found on the server', {
            position: 'top-right',
            autoClose: 3000,
          });
          console.error('No data found for the given title');
        }
      } else {
        console.error('Error finding data');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const deletePost = async () => {
    if (idToDelete !== null) {
      try {
        const response = await fetch(`https://api-storeg-emperial.vercel.app/products/${idToDelete}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Post deleted successfully');
          setIdToDelete(null);
        } else {
          console.error('Error deleting post');
        }

        navigate('/dashboard');
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="container mx-auto mt-3">
      <div className="row">
        <div className="col-6 offset-3  p-3 text-white rounded-4 " style={{ backgroundColor: '#c7ccd0' }}>
          <div className="delete d-block mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="d-block mb-2">
            <button onClick={handleFindId} className="btn btn-primary">
              Find ID
            </button>
            <button onClick={deletePost} className="btn btn-danger">
              Delete
            </button>
            <button onClick={DeleteAll} className="deleteButton btn btn-danger mx-2 ">
              Delete All Post
            </button>
            <button onClick={() => navigate('/dashboard')} className="btn btn-info text-capitalize  mx-2">comeBack</button>
          </div>
        </div>
      </div>
      {post && (
        <div className="row">
          <div className="col-6 offset-3  p-3 text-white rounded-4 mt-3" style={{ backgroundColor: '#c7ccd0' }}>
            <div className="edit-images mt-3">
              <img className="edit-image " src={post.image} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Delete;
