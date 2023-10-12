import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import ProductsReducer, { productsFeatch } from './Products/ProductsSlice';
import { productsApi } from './Products/ProductsApi';
import CartReducer, { getTotals } from './Products/CartSlice';

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFeatch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
);
