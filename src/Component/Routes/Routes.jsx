import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllArtCraft from "../AllCraftArt/AllArtCraft";
import AddCraft from "../AddCraftItem/AddCraft";
import MyList from "../MyList/MyList";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Update from "../MyList/Update/Update";
import ViewDetails from "../AllCraftArt/ViewDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/> ,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/allart',
            element: <AllArtCraft/> ,
            loader: () => fetch('http://localhost:5000/addcraft')
        },
        {
            path:'/addcrafti',
            element:  <PrivateRoute><AddCraft/></PrivateRoute>
        },
        {
            path: '/mylist',
            element:  <PrivateRoute><MyList/></PrivateRoute>
        },
        {
            path:'/update/:id',
            element: <PrivateRoute><Update/></PrivateRoute>, 
            loader:({params}) => fetch(`http://localhost:5000/addcraft/${params.id}`)
        },
        {
            path:'/details',
            element: <PrivateRoute><ViewDetails/></PrivateRoute>
        }
      ]
    },
  ]);

export default router  
