import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/data.json')
      },
      {
        path : "/contact",
        element: <PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>
      },
      {
        path : "/login",
        element: <Login></Login>
      },
      {
        path : "/register",
        element: <Register></Register>
      },
      {
        path : "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                 </PrivateRoute>,
        loader: () => fetch("/data.json"),
      },
      
    ],
  },
]);

export default router;