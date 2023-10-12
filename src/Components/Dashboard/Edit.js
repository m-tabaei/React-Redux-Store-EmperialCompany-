import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [id, setId] = useState('');
  const [post, setPost] = useState({
    title: '',
    body: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  const fetchPost = async () => {
    try {
      if (id) {
        const data = await fetch(`https://api-storeg-emperial.vercel.app/products/${id}`);
        const res = await data.json();
        setPost(res);
        setError('');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

    fetchPost();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://api-storeg-emperial.vercel.app/products/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            title: post.title,
            price: post.price,
            description: post.description,
            category: post.category,
            image: post.image,
            rating: post.rating.rate,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
     await response.json();
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="container mx-auto mt-3 ">
      {error && <h3 className="text-danger">{error}</h3>}
      <div className="row ">
        <div className="col-6 offset-3  p-3 text-white rounded-4 " style={{ backgroundColor: '#c7ccd0' }}>
          <div className="edit-images">
            <img className="edit-image" src={post.image} alt="" />
          </div>
          <form onSubmit={handleEdit}>
            <div className="d-block mb-2">
              <label htmlFor="ID">ID</label>
              <input
                type="number"
                placeholder="ID"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                value={post.title}
                onChange={(e) => setPost((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))}
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="price">price</label>
              <input
                type="text"
                placeholder="price"
                className="form-control"
                value={post.price}
                onChange={(e) => setPost((prevState) => ({
                  ...prevState,
                  price: e.target.value,
                }))}
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="category">category</label>
              <input
                type="text"
                placeholder="category"
                className="form-control"
                value={post.category}
                onChange={(e) => setPost((prevState) => ({
                  ...prevState,
                  category: e.target.value,
                }))}
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="image">image</label>
              <input
                type="text"
                placeholder="image"
                className="form-control"
                value={post.image}
                onChange={(e) => setPost((prevState) => ({
                  ...prevState,
                  image: e.target.value,
                }))}
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="rating">rating</label>
              <input
                type="text"
                placeholder="rating"
                className="form-control"
                value={post.rating ? post.rating.rate : ''}
                onChange={(e) => setPost((prevState) => ({
                  ...prevState,
                  rating: { rate: e.target.value },
                }))}
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="description">description</label>
              <textarea
                placeholder="description"
                className="form-control"
                style={{ height: '150px', resize: 'none' }}
                value={post.description}
                onChange={(e) => setPost((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))}
              />
            </div>
            <div className="d-block mb-2 col-6">
              <button
                type="submit"
                className="btn btn-success text-capitalize mt-4"
                disabled={loading}
              >
                Edit
                {loading && (
                  <div className="spinner-border spinner-border-sm" />
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="btn btn-info text-capitalize mt-4 mx-2"
              >
                comeBack
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Edit;
