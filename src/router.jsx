import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import DetailProduct from "./pages/DetailProduct";
import Wishlist from "./pages/Wishlist";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
      {
        path: "wishlist",
        element: <Wishlist/>,
      },
    ],
  },
]);
