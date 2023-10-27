
import './App.css'

//pages
import Home from './components/pages/Home'
import Login from './components/pages/Login';
// import Signup from './components/pages/signup';
//components
// import Nav from './components/Nav'



//react-router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from './components/utils/ProtectedRoutes';
import Signup from './components/pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<ProtectedRoutes />),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: (<Login />)
  },
  {
    path: "/signup",
    element: (<Signup />)
  },
])


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
