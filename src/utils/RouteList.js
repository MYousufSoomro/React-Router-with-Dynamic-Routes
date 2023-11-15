import About from "../screens/About";
import Home from "../screens/Home";
import Error from "../screens/Error";
import ProductDetails from "../screens/ProductDetails";
import { Navigate } from "react-router-dom";

export const RouteList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
  {
    path: "/product-details",
    element: <Navigate to="/" />,
  },
  {
    path: "*",
    element: <Error />,
  },
];
