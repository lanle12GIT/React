import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import App from './App.jsx'
import {

  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import LoginPage from './pages/login.jsx';
import Register from './pages/register.jsx';
import Users from './pages/users.jsx';
import Books from './pages/book.jsx';
import './styles/global.css'
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        index : true,
        element: <TodoApp/>
      },
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/Books",
        element: <Books/>
      },
    ]
  },
  {
    path: "/login",
    element:  <LoginPage/>
  },

  {
    path: "/register",
    element:  <Register/>
  }
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={ router}/>
  </StrictMode>
);
