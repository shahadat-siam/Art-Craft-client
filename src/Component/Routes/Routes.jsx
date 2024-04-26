import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllArtCraft from "../AllCraftArt/AllArtCraft";
import AddCraft from "../AddCraftItem/AddCraft";
import MyList from "../MyList/MyList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
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
            element: <AllArtCraft/>
        },
        {
            path:'/addcrafti',
            element: <AddCraft/>
        },
        {
            path: '/mylist',
            element: <MyList/>
        }
      ]
    },
  ]);

export default router  