import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Error from './Layouts/Error';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import AddContact from './Page/AddContact/AddContact';
import AllContact from './Page/AllContact/AllContact';
import PrivateRoute from './Provider/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/',
        element: <PrivateRoute><AddContact></AddContact></PrivateRoute>
      },
      {
        path: '/allContact',
        element: <PrivateRoute><AllContact></AllContact></PrivateRoute>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1700px] mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  </React.StrictMode>
)
