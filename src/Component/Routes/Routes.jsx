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
import ArtCraftCategories from "../Home/ArtCraftCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //https://y-three-wine.vercel.app
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://y-three-wine.vercel.app/addcraft"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allart",
        element: <AllArtCraft />,
        loader: () => fetch("https://y-three-wine.vercel.app/addcraft"),
      },
      {
        path: "/addcrafti",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://y-three-wine.vercel.app/addcraft/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://y-three-wine.vercel.app/addcraft/${params.id}`),
      },
      // {
      //     path:'/artcetegory',
      //     element: <ArtCraftCategories/>,
      //     loader: () => fetch('https://y-three-wine.vercel.app/default')
      // }
    ],
  },
]);

export default router;
