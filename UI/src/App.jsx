import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/LandingPage/Home';
import SignUp from './Components/CreateAccountPage/SignUp';
import Profile from './Components/Profile/Profile';
import Login from './Components/LoginPage/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-account",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App