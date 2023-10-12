import {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('required this filed')
      .min(1, '5min')
      .max(10, 'max10'),
    description: yup
      .string()
      .required('required this filed')
      .min(5, '5min')
      .max(100, 'max10'),
    price: yup
      .string()
      .required('required this filed')
      .min(5, '5min')
      .max(100, 'max10'),
    category: yup
      .string()
      .required('required this filed')
      .min(5, '5min')
      .max(100, 'max10'),
    image: yup
      .string()
      .required('required this filed')
      .min(5, '5min')
      .max(100, 'max10'),

  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const create = async (e) => {
    setLoading(true);
    try {
      const data = await fetch('https://api-storeg-emperial.vercel.app/products', {
        method: 'POST',
        body: JSON.stringify({
          id: parseInt(e.id),
          title: e.title,
          price: e.price,
          description: e.description,
          category: e.category,
          image: e.image,
          rating: e.rating,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
     await data.json();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handlerEvent = async (data) => {
    await create(data);
    reset();
  };
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-3 ">
      <div className="row">
        <div className="col-6 offset-3  p-3 text-white rounded-4 " style={{ backgroundColor: '#c7ccd0' }}>
          <form action="Post" onSubmit={handleSubmit(handlerEvent)}>
            <div className="d-block mb-2">
              <label htmlFor="ID">ID</label>
              <input
                type="number"
                placeholder="ID"
                className="form-control"
                {...register('id')}
              />
              <p>{errors.id?.message}</p>
            </div>
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
              <p className="text-warning">{errors.title?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="category">category</label>
              <input
                type="text"
                placeholder="category"
                className="form-control"
                {...register('category')}
              />
              <p className="text-warning">{errors.title?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="image">image</label>
              <input
                type="text"
                placeholder="image"
                className="form-control"
                {...register('image')}
              />
              <p className="text-warning">{errors.title?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="rating">rating</label>
              <input
                type="text"
                placeholder="rating"
                className="form-control"
                {...register('rating.rate')}
              />
              <p className="text-warning">{errors.title?.message}</p>
            </div>
            <div className="d-block mb-2">
              <label htmlFor="description">description</label>
              <textarea
                type="text"
                placeholder="description"
                className="form-control"
                style={{ height: '150px', resize: 'none' }}
                {...register('description')}
              />
              <p className="text-warning">{errors.body?.message}</p>

              <div className="d-block mb-2">
                <button
                  className="btn btn-success text-capitalize mt-4"
                  disabled=""
                >
                    create
                  {loading && (
                    <div className="spinner-border spinner-border-sm" />
                    )}
                </button>
                <button onClick={() => navigate('/dashboard')} className="btn btn-info mt-4 mx-2 text-capitalize">comeBack</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
