import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [loading, setLoading] = useState(false);

 
  const schema = yup.object().shape({
    title: yup.string().required('This field is required').min(1, 'Min length is 1').max(10, 'Max length is 10'),
    description: yup.string().required('This field is required').min(5, 'Min length is 5').max(100, 'Max length is 100'),
    price: yup.string().required('This field is required').min(5, 'Min length is 5').max(100, 'Max length is 100'),
    category: yup.string().required('This field is required').min(5, 'Min length is 5').max(100, 'Max length is 100'),
    image: yup.string().required('This field is required').min(5, 'Min length is 5').max(100, 'Max length is 100'),
    rating: yup.object().shape({
      rate: yup.string().required('This field is required'),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const create = async (data) => {
    setLoading(true);
    try {
    
      const id = Date.now();
      const productData = { ...data, id };
      
      const response = await fetch('https://api-storeg-emperial.vercel.app/products', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      
      
      if (response.ok) {
        
        reset(); 
      } else {
       
        console.error('Error creating product');
      }
      
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error creating product', error);
    }
  };

  const handlerEvent = async (data) => {
    await create(data);
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-3">
      <div className="row">
        <div className="col-6 offset-3 p-3 text-white rounded-4" style={{ backgroundColor: '#c7ccd0' }}>
          <form action="Post" onSubmit={handleSubmit(handlerEvent)}>
            <div className="d-block mb-2">
              <label htmlFor="title">title</label>
              <input
                type="text"
                placeholder="title"
                className="form-control"
                {...register('title')}
              />
              <p className="text-warning">{errors.title?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="price">price</label>
              <input
                type="text"
                placeholder="price"
                className="form-control"
                {...register('price')}
              />
              <p className="text-warning">{errors.price?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="category">category</label>
              <input
                type="text"
                placeholder="category"
                className="form-control"
                {...register('category')}
              />
              <p className="text-warning">{errors.category?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="image">image</label>
              <input
                type="text"
                placeholder="image"
                className="form-control"
                {...register('image')}
              />
              <p className="text-warning">{errors.image?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="rating">rating</label>
              <input
                type="text"
                placeholder="rating"
                className="form-control"
                {...register('rating.rate')}
              />
              <p className="text-warning">{errors['rating.rate']?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="description">description</label>
              <textarea
                placeholder="description"
                className="form-control"
                style={{ height: '150px', resize: 'none' }}
                {...register('description')}
              />
              <p className="text-warning">{errors.description?.message}</p>
            </div>
            <div className="d-block mb-2">
              <button
                className="btn btn-success text-capitalize mt-4"
                disabled={loading}
              >
                Create
                {loading && (
                  <div className="spinner-border spinner-border-sm" />
                )}
              </button>
              <button onClick={() => navigate('/dashboard')} className="btn btn-info mt-4 mx-2 text-capitalize">Come Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
