import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about-us',
    element: <About />
  },
  {
    path: '/blog-details/:id',
    element: <BlogDetails/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
